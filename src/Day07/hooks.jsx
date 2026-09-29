import { useCallback, useEffect, useMemo, useReducer, useState } from "react";
import { ClockLoader } from "react-spinners";
import Lottie from "react-lottie-player"
import error404 from "../assets/error404.json"
import "./hooks.css"
function Hooks(){
    const [loading,setloading]=useState(true)
    const [errors,setError]=useState(false)
    const [products_data,setProductsData]=useState([])

    useEffect(()=>{
        async function Products(){
            try{ 
            const response=await fetch('https://dummyjson.com/products')
            const data=await response.json()
            setProductsData(data.products)
            setloading(false)
            }
            catch(error){
               setError(true)
               setloading(false)
            }
           

        }Products()
    },[])

    const [search,dispatch]=useReducer(filterSearch,{searchvalue:"",
                                                     category:"all",
                                                     maxprice:""})
    function filterSearch(search,action){
       switch (action.type){
        case "SET_SEARCH":
            return {...search,searchvalue:action.payload};
        case "SET_CATEGORY":
            return {...search,category:action.payload}
        case "SET_MAX_PRICE":
            return {...search,maxprice:action.payload} 
        case "RESET_FILTERS":
            return {searchvalue:"",
                    category:"all",
                    maxprice:""}   
        default:
            return search;
       }
    }

    const filteredProducts= useMemo(()=>{
        return products_data.filter((product)=>(product.title.toLowerCase().includes(search.searchvalue.toLowerCase()) && (search.category=="all" || product.category===search.category) && (search.maxprice==="" || product.price<=search.maxprice)))

    },[products_data,search.searchvalue,search.category,search.maxprice])
    console.log(filteredProducts)
    
    const handleSearch=useCallback((e)=>{
          dispatch({type:"SET_SEARCH",payload:e.target.value})
    },[])
    const handleCategory=useCallback((e)=>{
          dispatch({type:"SET_CATEGORY",payload:e.target.value})
    },[])
    const handleMaxPrice=useCallback((e)=>{
          dispatch({type:"SET_MAX_PRICE",payload:e.target.value===""?"":Number(e.target.value)})
    },[])
    const handleReset=useCallback((e)=>{
          dispatch({type:"RESET_FILTERS"})
    },[])

    return<div id="main1">
      <div id="searchinputs">
             <input type="text" name="searchvalue" placeholder="search 🔎" onChange={(e)=>handleSearch(e)} value={search.searchvalue}/>
             <label htmlFor="category"> Category:<select name="category" id="Category" onChange={(e)=>handleCategory(e)} value={search.category}>
                <option value="all" default>All</option>
                <option value="groceries">Grocery</option>
                <option value="furniture">Furniture</option>
                <option value="fragrances">Fragrance</option>
                <option value="beauty">Beauty</option>
             </select></label>
             <label htmlFor="price">Max Price:<input type="number" id="price" name="maxprice" onChange={(e)=>handleMaxPrice(e)} value={search.maxprice}/></label>
             <button type="button" id="reset" onClick={()=>handleReset()}>Reset</button>
             
                        

        </div>
      <div id="main2"> 
        {loading?<ClockLoader color="#36d7b7" />:errors?<Lottie animationData={error404} loop play/>:(
             filteredProducts.map((product)=>(
                <div id="profile-card" key={product.id}>
                        <img id="productPic"src={product.category==="beauty"?'./beutyCategory.jpg':product.category==="fragrances"?'./fragrance.jpg':product.category==="furniture"?'./furniture.jpg':'./grocery.jpg'} alt="" />
                        <p>Title:{product.title}</p>
                        <p>Category:{product.category}</p>
                        <p>Price:{product.price}</p>   
                </div>)))}
        
        </div>
    </div>
}
export default Hooks;