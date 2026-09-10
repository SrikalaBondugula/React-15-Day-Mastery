import StudentProfile from "./StudentProfile";
import "./Studentdashboard.css";
function Student_dashboard({name}){
    return (<div>
        <h1 id="main-heading">Student Dashboard</h1>
        <hr />
        <h2 id="greet">Welcome, {name}</h2>
        <div id="sprofile">
            <StudentProfile name={name} age={23} course="Python" status="student"></StudentProfile>
        </div>

    </div>
    )
}
export default Student_dashboard