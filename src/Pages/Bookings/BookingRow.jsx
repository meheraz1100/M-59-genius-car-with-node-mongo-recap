const BookingRow = ({ booking, handleDelete, handleConfirm }) => {
  const { _id, customerName, email, date, service, price, img, status } = booking;







  return (
    <div>
      <tr>
        <th> 
          <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle btn-outline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </th>
        <div>
          <div className="flex items-center gap-3">
            <div className="rounded w-24 h-24">
              {img && <img src={img} alt="Avatar" />}
            </div>
            <div>
              <div className="font-bold">{service}</div>
            </div>
          </div>
        </div>
        <td>{customerName}</td>
        <td>{email}</td>
        <td>{date}</td>
        <td> $ {price}</td>
        <th>
          { status === 'confirm' ? <span className="font-bold text-primary">confirmed</span> :
            <button onClick={() => handleConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>}
        </th>
      </tr>
    </div>
  );
};

export default BookingRow;
