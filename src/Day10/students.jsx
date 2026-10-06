import { Link } from "react-router-dom";
import { studentContext } from "./studentContext";
import { useContext } from "react";
import "./style.css"
function Students(){
   const students=useContext(studentContext)
return<div className="students-page">
<h1 >Students</h1>
<h3>Students List</h3>
<div className="students-list">{students.map((std)=>(
    <Link to={`/students/${std.id}`} className="student-link">{std.name}</Link>
))}</div>


</div>
}
export default Students;
