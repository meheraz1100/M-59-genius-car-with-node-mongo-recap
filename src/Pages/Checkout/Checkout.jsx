import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { Authcontext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";

const Checkout = () => {
  const service = useLoaderData();
  const { title, _id, price, img } = service;
  const {user} = useContext(Authcontext);

  const handleBookService = (e) => {
    e.preventDefault();


    const form = e.target;
    const name = form.name.value;
    const date = form.date?.value;
    const email = user?.email;
    const booking = {
        customerName: name,
        email,
        img,
        date,
        service: title,
        service_id: _id,
        price: price,
    }

    console.log(booking);

    fetch('https://m-59-car-doctor-server.vercel.app/bookings', {
        method : 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.insertedId){
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Your Book successfully Placed",
                showConfirmButton: false,
                timer: 1500
              });
        }
    })
  }



  return (
    <div>
      <h2 className="text-4xl text-center">Book Service: {title}</h2>
      <form className="card-body" onSubmit={handleBookService}>
        <div className="grid geid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
            defaultValue={user?.displayName}
              type="text"
              placeholder="Name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              placeholder="date"
              name="date"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              defaultValue={user?.email}
              disabled
              placeholder="Your Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <input
              type="text"
              placeholder="Your Email"
              defaultValue={'$ '+price}
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-primary btn-block"
            type="submit"
            value="Order Confirm "
          />
        </div>
      </form>
    </div>
  );
};

export default Checkout;
