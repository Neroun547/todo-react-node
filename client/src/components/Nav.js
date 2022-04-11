import { Link } from "react-router-dom"
import "../style/nav.css";

export const Nav = () => {
    const exit = () => {
        localStorage.setItem("token", "");

        window.location.href = "/auth";
    }

    if(localStorage.getItem("token")) {
        return (
            <div className="wrapper__nav">
                <nav>
                    <Link to="/">Main</Link>
                    <Link to="/todo">Items</Link>
                    <button onClick={exit}>Exit</button>
                </nav>
            </div> 
        )
    } else {
        return (
            <div className="wrapper__nav">
                <nav>
                    <Link to="/">Main</Link>
                    <Link to="/auth">Auth</Link>
                    <Link to="/signup">Sign up</Link>
                </nav>
            </div> 
        )
    }
}