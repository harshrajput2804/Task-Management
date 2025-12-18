import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={{marginBottom: "20px"}}>
            <Link to="/">Home</Link> |{" "}
            <Link to="/tasks">Tasks</Link> |{" "}
            <Link to="/about">About</Link> |{""}
            <Link to="/contact">Contact</Link>
        </nav>
    );
}

export default Navbar;