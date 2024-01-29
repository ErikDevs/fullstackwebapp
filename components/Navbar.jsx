import Link from "next/link";
import React from "react";
import { AiOutlineShopping } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">SystemTech</Link>
      </p>
      <button type="button" className="cart-icon" onClick="">
        <AiOutlineShopping /> <span className="cart-item-qty top-0">1</span>
      </button>
    </div>
  );
};

export default Navbar;
