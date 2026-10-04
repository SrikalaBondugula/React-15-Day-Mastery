import React from 'react'
import ProfileCard from './Day01/ProfileCard'
import Studentdashboard from "./Day02/Studentdashboard";
import Studentprofile from "./Day02/StudentProfile";
import Skills from "./Day02/skills";
import "./App.css"
import PractiseRender from './Day03/ToDo';
import ShoppingCart from './Day04/shoppingCart'
import Forms from './Day05/forms'
import UseEffect from './Day06/UseEffect';
import {useState} from "react";
import Hooks from "./Day07/hooks"
import Counter from "./Day08/TemperatureConverter"
import ContextTask from './Day09/context';
function App(){
  return <div id='maindiv'>
     
             {/*    <ProfileCard></ProfileCard> */}
             {/* <div id='std'> <Studentdashboard name="Srikala"></Studentdashboard> </div>
                    <div id='skills'><Skills></Skills> </div>  */}
             {/*<PractiseRender/>*/}
             {/* <ShoppingCart/> */}
            {/*  <Forms/>  */}
            {/*  <UseEffect /> */}
            {/* <Hooks/> */}
            {/* <Counter/> */}
            <ContextTask/> 

            
            
            

        </div>
}
export default App