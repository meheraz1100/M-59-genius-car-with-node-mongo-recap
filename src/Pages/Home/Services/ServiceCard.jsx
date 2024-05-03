import { FaArrowRight } from "react-icons/fa6";




const ServiceCard = ({service}) => {
    // eslint-disable-next-line no-unused-vars
    const {_id, service_id, title, img, price, description} = service;

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={img}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          {/* <p>{description}</p> */}
          <p className="text-xl text-orange-500">{price}</p>
          <div className="card-actions flex justify-between items-center">
            <button className="btn btn-primary">Buy Now</button>
            <FaArrowRight className="text-orange-500 text-2xl"></FaArrowRight>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
