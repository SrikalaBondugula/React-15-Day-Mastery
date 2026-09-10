import React from 'react'
import ProfileCard from './Day01/ProfileCard'
import Studentdashboard from "./Day02/Studentdashboard";
import Studentprofile from "./Day02/StudentProfile";
import Skills from "./Day02/skills";
import "./App.css"
function App(){
  return <div id='maindiv'>
  {/*    <ProfileCard></ProfileCard> */}
       <div id='std'> <Studentdashboard name="Srikala"></Studentdashboard> </div>
       <div id='skills'><Skills></Skills> </div> 
        
    </div>
}
export default App