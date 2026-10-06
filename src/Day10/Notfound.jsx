import { Link } from "react-router-dom";
import "./style.css"
function Notfound(){
   return (
        <div className="not-found">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>The page you are looking for does not exist.</p>

            <Link className="home-btn" to="/">
                Go to Home
            </Link>
        </div>
    );
}
export default Notfound;