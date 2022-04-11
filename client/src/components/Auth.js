import { Link } from "react-router-dom";
import { useState } from "react";
import "../style/auth.css";

export const Auth = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [displayError, setDisplayError] = useState("none");

    const changeUsername = (e) => {
        setUsername(e.target.value);
    }
    const changePassword = (e) => {
        setPassword(e.target.value);
    }
    const submitForm = async (e) => {
        e.preventDefault();

        const api = await fetch("/auth", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        });

        const response = await api.json();

        if(!api.ok) {
            setError(response.message[0]);
            setDisplayError("block");

            return;
        }

        localStorage.setItem("token", response.message);
        window.location.href = "/todo";
    }
    return (
        <div className="wrapper__content">
            <form className="auth__form" onSubmit={submitForm}>
                <input placeholder="Username: " value={username} onChange={changeUsername}/>
                <input placeholder="Password: " type="password" value={password} onChange={changePassword}/>
                <button>Login</button>
                <span className="auth__link">Don't have account ? <Link to="/signup">Create now</Link></span>
            </form>

            <div className="wrapper__error" style={{display: displayError}}>
                {error}
            </div>
        </div>
    )
}