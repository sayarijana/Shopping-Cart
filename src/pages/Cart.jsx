import { useSelector } from "react-redux";
import  "./Cart.css";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {

  const {cart} = useSelector( (state) => state);
  const [totalAmount,setTotalAmount]=useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc,curr) => acc + curr.price , 0));
  },[cart]);



  return (
    <div className="cart">
      {
        cart.length > 0 ?
        <div className="cartDetails">
          <div className="cartItems">
            {
              cart.map( (item,index) => (
                <CartItem key={item.id} item={item} itemIndex={index}/>
              ))
            }
          </div>

          <div className="summary">
            <div className="Sum">
              <div className="cartText">Your Cart</div>
              <h2 className="sumText">Summary</h2>
              <p>
                <span>Total Items : {cart.length}</span>
              </p>
            </div>

            <div className="Sum">
              <p className="amountText">Total Amount:<span className="amount">${totalAmount}</span></p>
              <NavLink to="/">
                <button className="checkoutBtn">Checkout For More</button>
              </NavLink>
            </div>

          </div>

        </div>
        :
        <div className="cartEmpty">
          <h1 className="cartH">Your cart is empty</h1>
          <NavLink to="/">
            <button className="shopNowBtn">shop now</button>
          </NavLink>
        </div>

      }

    </div>
  )
};

export default Cart;
