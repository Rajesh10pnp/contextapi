// src/components/Navbar.js
import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { useAuth } from "../contexts/AuthContext";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { login, user, logout } = useAuth();

  return (
    <div
      style={{
        width:"100vw",
        padding: "10px",
        background: theme === "light" ? "#eee" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >

      <h2>Movie App</h2>
      <div>
        {user ? (
          <>
            <span style={{ marginRight: "10px" }}>Welcome {user.name}</span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
           <button onClick={() => login("Rajesh")}>Login</button>
           <button onClick={toggleTheme}>Toggle Theme Hi</button>
          </>
          
        )}
      </div>

    </div>
  );
}

export default Navbar;
