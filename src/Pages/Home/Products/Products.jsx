import img1 from "../../../assets/images/products/1.png";
import img2 from "../../../assets/images/products/2.png";
import img3 from "../../../assets/images/products/3.png";
import img4 from "../../../assets/images/products/4.png";
import img5 from "../../../assets/images/products/5.png";
import img6 from "../../../assets/images/products/6.png";

import rating from '../../../assets/images/rating.png'

const Products = () => {
  return (
    <div className="mt-10">
      <h1 className="text-2xl text-center font-bold text-orange-500 mb-7">Popular Products</h1>
      <h1 className="text-6xl text-center font-bold">Browse Our Products</h1>
      <p className="text-center mt-7">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img1} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <img src={rating} alt="" />
            <h2 className="card-title">Cools Led Light</h2>
            <div className="card-actions">
            <p className="text-center  text-orange-500 text-xl">$20.00</p>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img2} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
          <img src={rating} alt="" />
            <h2 className="card-title">Cools Led Light</h2>
            <div className="card-actions">
              <p className="text-center  text-orange-500 text-xl">$20.00</p>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img3} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
          <img src={rating} alt="" />
            <h2 className="card-title">Cools Led Light</h2>
            <div className="card-actions">
              <p className="text-center  text-orange-500 text-xl">$20.00</p>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img4} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
          <img src={rating} alt="" />
            <h2 className="card-title">Cools Led Light</h2>
            <div className="card-actions">
              <p className="text-center  text-orange-500 text-xl">$20.00</p>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img5} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
          <img src={rating} alt="" />
            <h2 className="card-title">Cools Led Light</h2>
            <div className="card-actions">
              <p className="text-center  text-orange-500 text-xl">$20.00</p>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img6} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
          <img src={rating} alt="" />
            <h2 className="card-title">Cools Led Light</h2>
            <div className="card-actions">
              <p className="text-center  text-orange-500 text-xl">$20.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
