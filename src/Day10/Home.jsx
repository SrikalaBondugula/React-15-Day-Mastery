import { createContext } from "react";
import {Link} from "react-router-dom"
import "./style.css"
function Home(){
     
    return<>
    <h1>Student Portal</h1>
    <h4>Welcome to Student Portal</h4>
       <Link to="/students" className="home-links">View Students</Link>
       <Link to="/courses" className="home-links">View Courses</Link>
    </>
}
export default Home;