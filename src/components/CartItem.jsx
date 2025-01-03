import { useDispatch } from "react-redux";
import "./CartItem.css";
import { MdDelete } from "react-icons/md";
import { toast } from 'react-toastify';
import {remove} from "../redux/Slices/CartSlice"

function CartItem({item,itemIndex}) {

  const dispatch=useDispatch();

  function removeFromCart(){
    dispatch(remove(item.id));
    toast.error("Item removed",{
      style: { width: 'max-content' }
    });
  }



  return (
    <div className="cartD">
      <div>
        <img src={item.image} alt="" className="cartImg"/>
      </div>

      <div className="itemDiv">
        <h2 className="heading">{item.title}</h2>
        <p className="description">{item.description.split(" ").slice(0,15).join(" ")+"..."}</p>
        <div className="pd">
          <p className="PriceD">${item.price}</p>
          <button onClick={removeFromCart} className="deleteBtn"><MdDelete className="DIcon"/></button>
        </div>
      </div>
    </div>
  )
};

export default CartItem;
