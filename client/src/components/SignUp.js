import { useState } from "react";
import { Link } from "react-router-dom";

export const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [displayError, setDisplayError] = useState("none");

    const changeName = (e) => {
        setName(e.target.value);
    }
    const changeEmail = (e) => {
        setEmail(e.target.value);
    }
    const changeUsername = (e) => {
        setUsername(e.target.value);
    } 
    const changePassword = (e) => {
        setPassword(e.target.value);
    }
    const submitForm = async (e) => {
        e.preventDefault();
        const api = await fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name, username, email, password
            })
        });
        const response = await api.json();

        if(!api.ok) {
            setError(response.message[0]);
            setDisplayError("block");
            return;
        }

        window.location.href = "/auth";
    }

    return (
        <div className="wrapper__content">
            <form className="auth__form" onSubmit={submitForm} required>
                <input placeholder="Name: " value={name} onChange={changeName} required/>
                <input placeholder="Email: " type="email" value={email} onChange={changeEmail} required/>
                <input placeholder="Username: " value={username} onChange={changeUsername} required/>
                <input placeholder="Password: " type="password" value={password} onChange={changePassword} required/>
                <button>Sign up</button>
                <span className="auth__link">Have account ? <Link to="/auth">Login now</Link></span>
            </form>

            <div className="wrapper__error" style={{display: displayError}}>
                {error}
            </div>
        </div>
    )
}