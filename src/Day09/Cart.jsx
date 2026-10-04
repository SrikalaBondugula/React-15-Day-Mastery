import { CartContext } from "./context";
import { useContext } from "react";
import "./cart.css"
function Cart(){
  const {Products,productsCart,dispatch}=useContext(CartContext)
  return<>
  <div id="products">
       {Products.map((product)=>(
        <div key={product.id}>
            <img src={product.image} alt="" />
            <h3>{product.name}</h3>
            <p>💸{product.price}</p>
            <button onClick={()=>dispatch({type:"ADD_TO_CART",payload:product.id})}>Add to Cart</button>
        </div>))}
  </div>
  
  <div id="cart">
    <h1>Cart</h1>
       {productsCart.length===0?(<h1>Cart is empty</h1>):
       productsCart.map((product)=>(
        <div id="cart-prod"key={product.id}>
           <div >
                <img src={product.image} alt="" />
                <h3>{product.name}</h3>
                <p>💸{product.price}</p>
                <button onClick={()=>dispatch({type:"REMOVE_FROM_CART" ,payload:product.id})}>Remove</button>
           </div> 
        </div>))}
  </div>
  </>
}
export default Cart;