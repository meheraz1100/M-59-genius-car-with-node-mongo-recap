import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../Providers/AuthProviders";
import BookingRow from "./BookingRow";

const Bookings = () => {
  const { user } = useContext(Authcontext);
  const [bookings, setBookings] = useState([]);

  const url = `https://m-59-car-doctor-server.vercel.app/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [url]);

  const handleDelete = (_id) => {
    const procced = confirm("Areyou sure ?");
    if (procced) {
      fetch(`https://m-59-car-doctor-server.vercel.app/bookings/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted success!!!");
            const remaining = bookings.filter((booking) => booking._id !== _id);
            setBookings(remaining);
          }
        });
    }
  };

  const handleConfirm = (_id) => {
    fetch(`https://m-59-car-doctor-server.vercel.app/bookings/${_id}`, {
      method: "PATCH",
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify({status: 'confirm'})
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.modifiedCount > 0){
        // update state
        const remaining = bookings.filter(booking => booking._id !== _id);
        const updated = bookings.find(booking => booking._id === _id);
        updated.status = 'confirm'
        const newBookings = [updated, ...remaining];
        setBookings(newBookings)        
      }
    })
  };

  return (
    <div>
      <h1>Your Bookings : {bookings.length}</h1>
      <div className="">
        <table className="table">
          {/* head */}
          <tr>
            <th>Image</th>
            <th>Service</th>
            <th>Date</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
          <tbody>
            {bookings.map((booking) => (
              <BookingRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleConfirm={handleConfirm}
              ></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
