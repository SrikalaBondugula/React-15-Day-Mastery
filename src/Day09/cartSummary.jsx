import { CartContext } from "./context";
import { useContext } from "react";
function CartSummary(){
  const {Products,productsCart,dispatch}=useContext(CartContext)
  return<>
  <div id="cart-summary">
    <h1>Cart Summary</h1>
    <h3>Total Products:{productsCart.length}</h3>
    <h3>Total Price:{productsCart.reduce((acc,product)=>acc+product.price,0)}</h3>
  </div>
  </>
}
export default CartSummary;