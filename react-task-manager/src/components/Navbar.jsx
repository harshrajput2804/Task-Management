import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
    const { isLoggedIn, username, logout } = useAuth();

    return (
        <nav style={{marginBottom: "20px"}}>
            <Link to="/">Home</Link> |{" "}
            <Link to="/about">About</Link> |{" "}
            <Link to="/contact">Contact</Link> |{" "}
            
            {isLoggedIn ? (
                <>
                    <Link to="/tasks">Tasks</Link> |{" "}
                    <span> {username} </span> |{" "}
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <Link to="/login">Login</Link>
            )}    
        </nav>
    );
}

export default Navbar;