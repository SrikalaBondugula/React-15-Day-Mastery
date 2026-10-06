import { useParams } from "react-router-dom";
import { studentContext } from "./studentContext";
import { useContext } from "react";
import "./style.css"
import { Link } from "react-router-dom";
function StudentDetails(){
    const students=useContext(studentContext)
    const {id}=useParams()
    
    const req_std=students.find((std)=>std.id==id)
    console.log(students)
    console.log(req_std)
   return (
        <div className="container">
            <h1>Student Details</h1>

            <div className="student-details">
                <h2>{req_std.name}</h2>

                <h4>
                    ID: <span>{req_std.id}</span>
                </h4>

                <h4>
                    Name: <span>{req_std.name}</span>
                </h4>

                <h4>
                    Course: <span>{req_std.course}</span>
                </h4>

                <h4>
                    Year: <span>{req_std.year}</span>
                </h4>

                <h4>
                    Email: <span>{req_std.email}</span>
                </h4>

                <h4>
                    City: <span>{req_std.city}</span>
                </h4>

                <Link className="back-btn" to="/students">
                    ← Back to Students
                </Link>
            </div>
        </div>
    );

}
export default StudentDetails