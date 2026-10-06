import "./style.css"
function Courses(){
const courses = [
    {
        id: 1,
        name: "Python Programming",
        description: "Learn Python fundamentals, functions, OOP, modules, and problem-solving."
    },
    {
        id: 2,
        name: "React.js",
        description: "Learn components, props, state, hooks, forms, and React Router to build modern web applications."
    },
    {
        id: 3,
        name: "Django",
        description: "Learn how to build backend web applications using Django, models, views, templates, APIs, and authentication."
    },
    {
        id: 4,
        name: "SQL & MySQL",
        description: "Learn database concepts, SQL queries, joins, subqueries, views, procedures, and database management."
    },
    {
        id: 5,
        name: "Data Structures & Algorithms",
        description: "Learn arrays, strings, linked lists, stacks, queues, trees, graphs, sorting, searching, and problem-solving techniques."
    },
    {
        id: 6,
        name: "HTML & CSS",
        description: "Learn how to structure web pages with HTML and create responsive, attractive layouts using CSS."
    },
    {
        id: 7,
        name: "JavaScript",
        description: "Learn variables, functions, arrays, objects, DOM manipulation, events, ES6 features, and asynchronous JavaScript."
    },
    {
        id: 8,
        name: "Git & GitHub",
        description: "Learn version control, repositories, branches, commits, merging, pull requests, and collaborative development."
    }
];
return (
        <div className="container courses-page">
            <h1>Courses 📚</h1>

            <div className="course-list">
                {courses.map((course) => (
                    <div className="course-card" key={course.id}>
                        <h3>{course.name}</h3>
                        <p>{course.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Courses;
