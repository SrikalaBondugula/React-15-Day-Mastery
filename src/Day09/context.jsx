import { createContext, useReducer } from "react";
import Cart from "./Cart";
import CartSummary from "./cartSummary";
export const CartContext=createContext();

function ContextTask(){
    const Products=[{
        id:1,
        name:"Party Wear Kurta set",
        price:1200,
        image:"/cateloge1.jpg"
    },
     {
        id:2,
        name:"Party Wear Anarkali set",
        price:2000,
        image:"/catelog2.jpg"
    },
    {
        id:3,
        name:"Party Wear Anarkali set",
        price:2200,
        image:"/catelog3.jpg"
    },
    {
        id:4,
        name:"Maxi Frock",
        price:1200,
        image:"/catelog4.jpg"
    },
    {
        id:5,
        name:"Party Wear Kurta set",
        price:1200,
        image:"/catelog5.jpg"
    },
    {
        id:6,
        name:"Party Wear Anarkali set",
        price:1200,
        image:"/catelog6.jpg"
    },
    {
        id:7,
        name:"Party Wear Kurta set",
        price:1000,
        image:"/catelog7.jpg"
    },
    {
        id:8,
        name:"Maxi frock",
        price:1200,
        image:"/catelog8.jpg"
    },
    {
        id:9,
        name:"Cotton Kurta set",
        price:800,
        image:"/catelog9.jpg"
    },
    {
        id:10,
        name:"Party Wear Sharara set",
        price:3200,
        image:"/catelog10.jpg"
    }]
    const [productsCart,dispatch]=useReducer(reducer,[])
    function reducer(productsCart,action){
        switch(action.type){
            case "ADD_TO_CART":{
                const product_avail=productsCart.find((product)=>product.id===action.payload)
                if (Boolean(product_avail)===false){
                    const cartProduct=Products.find((product)=>product.id===action.payload)
                    return [...productsCart,cartProduct]
                } 
                return productsCart}
            case "REMOVE_FROM_CART":{
                const new_Cart=productsCart.filter((product)=>product.id!==action.payload)
                return [...new_Cart]}
            default:
              return productsCart;
        }
    
    }

    return<>
    <CartContext.Provider value={{Products,productsCart,dispatch}}>
          <Cart/>
          <CartSummary/>

          
    </CartContext.Provider>
       </>

}
export default ContextTask;