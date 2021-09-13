import React from "react";
import Shirt from "../../assets/Shirt.jpg";
import { Link } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";

interface IProps {
  product_id: string;
  thumbnail?: string;
  name?: string;
  buyNow?: any;
  price?: any;
}

interface IState {
  isHovered?: boolean;
}

interface BodyProps {
  product: IProps;
  isHovered: IState;
}

const handleString = (text: string) => {
  return text.slice(0, 25);
};

const Product = () => {
  return (
    <Link to="/show-product" className="product">
      <img src={Shirt} alt="" />
      <p className="name">
        {handleString("Fashion Heavy Duty Plain T Shirt-Navy Blue")}...
      </p>
      <p className="price">Ksh 340</p>
      <button>
        <MdAddShoppingCart />
      </button>
    </Link>
  );
};

export default Product;
