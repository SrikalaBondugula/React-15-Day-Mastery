import {BrowserRouter,Routes,Route,NavLink} from "react-router-dom";
import Home from "./Home";
import Students from "./students";
import StudentDetails from "./StudentDetails"
import NotFound from "./Notfound";
import About from "./About"
import { studentContext } from "./studentContext";
import Courses from "./Courses";
import "./style.css"

function Main(){
    const students = [
    {
        id: 1,
        name: "Srikala",
        course: "Computer Science",
        year: "Final Year",
        email: "srikala@example.com",
        city: "Hyderabad"
    },
    {
        id: 2,
        name: "Rahul",
        course: "Information Technology",
        year: "3rd Year",
        email: "rahul@example.com",
        city: "Bengaluru"
    },
    {
        id: 3,
        name: "Priya",
        course: "Computer Science",
        year: "Final Year",
        email: "priya@example.com",
        city: "Chennai"
    },
    {
        id: 4,
        name: "Anil",
        course: "Electronics & Communication",
        year: "3rd Year",
        email: "anil@example.com",
        city: "Vijayawada"
    },
    {
        id: 5,
        name: "Kavya",
        course: "Artificial Intelligence",
        year: "2nd Year",
        email: "kavya@example.com",
        city: "Hyderabad"
    },
    {
        id: 6,
        name: "Arjun",
        course: "Mechanical Engineering",
        year: "Final Year",
        email: "arjun@example.com",
        city: "Pune"
    },
    {
        id: 7,
        name: "Sneha",
        course: "Information Technology",
        year: "2nd Year",
        email: "sneha@example.com",
        city: "Mumbai"
    },
    {
        id: 8,
        name: "Rohit",
        course: "Computer Science",
        year: "3rd Year",
        email: "rohit@example.com",
        city: "Delhi"
    }
];
    return<>
    <BrowserRouter>
     <nav className="navbar">
            <h2>Student Portal</h2>

            <NavLink to="/">Home</NavLink>
            <NavLink to="/students">Students</NavLink>
            <NavLink to="/courses">Courses</NavLink>
            <NavLink to="/about">About</NavLink>
    </nav>
    <studentContext.Provider value={students}>
           <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/students" element={<Students/>}></Route>
        <Route path="/students/:id" element={<StudentDetails/>}></Route>
        <Route path="/courses" element={<Courses/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>          
    </Routes>
    </studentContext.Provider>
   
    </BrowserRouter>
    </>
}
export default Main;