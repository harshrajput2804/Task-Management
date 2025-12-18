import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        if (!username.trim()) return;
        login(username);
        navigate("/tasks");
    };

    return (
        <div>
            <h1>Login</h1>

            <input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <button onClick={handleLogin} disabled={!username.trim()}>
                Login
            </button>
        </div>
    );
}

export default Login;