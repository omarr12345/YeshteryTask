import "./first-nav.scss";
import { BsMinecartLoaded } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlinePersonOutline } from "react-icons/md";
import { cartContext } from "../../context/CartContextProvider";
import { useContext } from "react";

const FirstNav = () => {
  const qua = useContext(cartContext);
  return (
    <div className="first-nav">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-md-4 col-sm-6 col-7 d-flex align-items-center justify-content-evenly">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="18.219"
                viewBox="0 0 24 18.219"
                className="d"
                fill="white"
              >
                <g transform="translate(-2557.581 -332.903)">
                  <path d="M2580.248,335.57h-21.334a1.333,1.333,0,0,1,0-2.667h21.334a1.333,1.333,0,0,1,0,2.667Z"></path>
                  <path d="M2576.248,343.346h-17.334a1.334,1.334,0,0,1,0-2.667h17.334a1.334,1.334,0,0,1,0,2.667Z"></path>
                  <path d="M2580.248,351.122h-21.334a1.333,1.333,0,0,1,0-2.666h21.334a1.333,1.333,0,0,1,0,2.666Z"></path>
                </g>
              </svg>
            </span>

            <img
              src="/public/images/brand-logo-yellow.svg"
              className="logo-img"
            />
          </div>

          <div className="col-md-4 col-sm-2 col-1">
            <form className="search-inp">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 19.943 20"
              >
                <path
                  d="M291.712,162.4l-5.845-5.844a7.734,7.734,0,1,0-1.4,1.383l5.852,5.852a.984.984,0,0,0,1.391-1.391Zm-17.688-10.6a5.758,5.758,0,1,1,5.757,5.757A5.764,5.764,0,0,1,274.024,151.8Z"
                  transform="translate(-272.057 -144.08)"
                ></path>
              </svg>

              <input type="text" placeholder="Search ..." />
            </form>
          </div>

          <div className="col-md-4 col-sm-4 col-4 d-flex justify-content-between">
            <button className="my-2 nav-btn-style position-relative">
              <BsMinecartLoaded className="nav-icons mx-1" />
              <span className="cart-count fw-bold">{qua}</span>

              <span className="nav-ele-text">Cart</span>
            </button>

            <button className="my-2 nav-btn-style">
              <AiOutlineHeart className="nav-icons mx-1" />
              <span className="nav-ele-text">Wishlist</span>
            </button>
            <button className="my-2 nav-btn-style">
              <MdOutlinePersonOutline className="nav-icons mx-1" />
              <span className="nav-ele-text">Login</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstNav;
