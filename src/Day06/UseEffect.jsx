import { useEffect, useState } from "react";
import { FadeLoader } from "react-spinners";
import './UseEffect.css';
import Lottie from 'react-lottie-player';
import error404 from '../assets/error404.json'

function UseEffect(){
    const [iserror,setIsError]=useState(false)
    const [isloading,setLoading]=useState(true)
    const [users,setusers]=useState([])
    const[nameSearch,setSearchValue]=useState("")
    const [gender,setgender]=useState("all")
    const[refresh,setrefresh]=useState(0)
    useEffect(()=>{
        async function getUser(){
            try{
                    const response=await fetch('https://dummyjson.com/users')
                    const data=await response.json()
                    setusers(data.users)
                    setLoading(false)
            }
            catch(error){
                  setIsError(true)
                  setLoading(false)
            }
        


        }getUser()
    },[refresh])
    function Search(e){
        setSearchValue(e.target.value)
    }
    const filteredusers= users.filter((user)=> ((user.firstName.toLowerCase().includes(nameSearch.toLowerCase()) || user.lastName.toLowerCase().includes(nameSearch.toLowerCase()))) && (gender==="all" || user.gender===gender))

 return <div id="main1">
          <div id="searchinputs">
             <input type="text" onChange={Search} value={nameSearch} placeholder="search 🔎"/>
             <label htmlFor="gender"> Gender:<select name="" id="gender" value={gender} onChange={(e)=>setgender(e.target.value)}>
                <option value="all" default>All</option>
                <option value="male">Male</option>
                <option value="female">female</option>
             </select></label>
             <button type="button" id="reset" onClick={()=>{setSearchValue(""); setgender("all")}}>Reset</button>
             <button type="button"  id="refresh"onClick={()=>{setrefresh(refresh+1); setLoading(true)}}>Refresh</button>
                        

          </div>
          <p>Showing {filteredusers.length} users</p> 

            <div id="main2"> 
                {isloading ? (<FadeLoader color="#36d7b7" />): iserror ? <Lottie loop animationData={error404} play style={{ width: 400, height: 400 }}/>:(
                filteredusers.map((user)=>(
                <div id="profile-card" key={user.id}>
                        <img src={user.gender==="male"?'/boyAvatar.jpg':'/girlAvatar.jpg'} id="profilePic" alt="" />
                        <p>Firstname:{user.firstName}</p>
                        <p>Lastname:{user.lastName}</p>
                        <p>Age:{user.age}</p>
                        <p>Email:{user.email}</p>
                        <p>Phone:{user.phone}</p>
                        <p>Gender:{user.gender}</p>   
                </div>)))
                }
            </div>
       </div>
}
export default UseEffect;