import { toast } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
import {add,remove} from "../redux/Slices/CartSlice"
import "./Product.css"


const Product = ({post}) => {

  const {cart}=useSelector( (state) => state);
  const dispatch=useDispatch();

  function addToCart(){
    dispatch(add(post));
    toast.success("Item added to cart",{
      style: { width: 'max-content' }
    });
  }

  function removeFromCart(){
    dispatch(remove(post.id));
    toast.error("Item removed from cart", {
      style: { width: 'max-content' }
    });
  }

  return (
    <div className='productDetail'>
      <div>
        <p className='title'>{post.title}</p>
      </div>

      <div>
        <p className='desc'>{post.description.split(" ").slice(0,10).join(" ")+"..."}</p>
      </div>

      <div>
        <img src={post.image} alt="" className='imageP'/>
      </div>

      <div className='pandb'>
        <p className='price'>$ {post.price}</p>

        <div>
          {
            cart.some( (p) => p.id===post.id) ? 
              <button onClick={removeFromCart} className='pdtBtn'>Remove Item </button>
            : <button onClick={addToCart} className='pdtBtn'>Add to Cart</button>
          }
        </div>
      </div>


    </div>
  )
};

export default Product;
