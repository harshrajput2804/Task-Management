import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");

    useEffect(() =>{
        const storedAuth = JSON.parse(localStorage.getItem("auth"));
        if ( storedAuth?.isLoggedIn ){ 
            setIsLoggedIn(true);
            setUsername(storedAuth.username);
        }
    }, []);


    const login = (name) => {
        setIsLoggedIn(true);
        setUsername(name);

        localStorage.setItem(
            "auth",
            JSON.stringify({ isLoggedIn: true, username: name })
        );
    };

    const logout = () => {
        setIsLoggedIn(false);
        setUsername("");
        localStorage.removeItem("auth");
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, username, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}