import { useState } from 'react'
import './shoppingCart.css'
function ShoppingCart(){
   const dress_catelogs=[{
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
    const [cart_list,setCart_product]=useState([])


    function addProductToCart(product)
    {
        let product_exist=cart_list.find(cart_product=>(cart_product.id===product.id))
        if (product_exist)
            {
                        const new_cart_list=cart_list.map(cart_product=>{
                        if (product.id===cart_product.id)
                        {
                            const new_cart_product={
                                ...product_exist,
                                count:cart_product.count+1
                            }
                            return new_cart_product
                        }
                        return cart_product
                    })
                    setCart_product(new_cart_list) 
            }
        else{
            const new_product={
                ...product,
                count:1
            }
            setCart_product([...cart_list,new_product])
        }
       
    }

    function increaseCount(product_id){
        const new_cart_list=cart_list.map(cart_product=>{
            if (product_id===cart_product.id)
                {
                   return {...cart_product,count:cart_product.count+1}
                }
            return cart_product
        })
        setCart_product(new_cart_list)
    }
    function decreaseCount(product_id){
        const new_cart_list=cart_list.map(cart_product=>{
            if (product_id===cart_product.id)
                {
                   return {...cart_product,count:cart_product.count-1}
                }
            return cart_product
        }).filter(cart_product=>cart_product.count>0)
        setCart_product(new_cart_list)
    }
    function RemoveProduct(product_id){
        const new_cart_list=cart_list.filter(cart_product=>{
            if (product_id!==cart_product.id)
                {
                   return cart_product
                }
        })
        setCart_product(new_cart_list)
    }

    return(
        <>
        <div id="main-heading">
            <h1>
                Shopping Cart🛒
            </h1>
        </div>
        <div id="catelog-display">
            {dress_catelogs.map((catelog_obj)=>(
               <div id="each-catelog" key={catelog_obj.id}>
                   <img src={catelog_obj.image} alt="" />
                   <h3>{catelog_obj.name}</h3>
                   <p>💸{catelog_obj.price}</p>
                   <button onClick={()=>addProductToCart(catelog_obj)}>add to cart</button>
               </div>
            ))}
        </div>
        <div id="cart-display">
            <div id="cart-heading"><h1>Cart Products🛒</h1></div>
            {cart_list.length<1?<h1>No Products added to Cart</h1>:
                 (cart_list.map((product)=>(
                 <div id="cart-product" key={product.id}>
                        <div id="product-img">
                                <img src={product.image}/>
                                <div id="inc-quantity-dec">
                                    <div id='decrease'><button onClick={()=>decreaseCount(product.id)}>-</button></div>
                                    <div id='quantity'>{product.count}</div>                                    
                                    <div id='increase'><button onClick={()=>increaseCount(product.id)}>+</button></div>

                                    
                                </div>
                        </div>
                        <div id='removebtn-price'> 
                            <div id="remove-btn"><button onClick={()=>RemoveProduct(product.id)}>x</button></div>
                            <div id='price'>Price:{product.price}/-</div>
                            <div id='quantity'>Quantity:{product.count}</div>
                            <div id="total-product-price">Total:{product.count*product.price}/-</div>
                        </div>
                 </div>
                
                )))
                
            }
             {cart_list.length>0 && <div id="cart-summary">
                        <h2>Cart Summary</h2>

                        <p>
                            Total Items: {
                                cart_list.reduce((total, product) => total + product.count, 0)
                            }
                        </p>

                        <p>
                            Total Price: ₹{
                                cart_list.reduce(
                                    (total, product) => total + product.price * product.count,
                                    0
                                )
                            }/-
                        </p>
                </div>}

        </div>
        </>
    )
}
export default ShoppingCart