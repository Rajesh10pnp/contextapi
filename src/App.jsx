// src/App.js
import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { MovieProvider } from "./contexts/MovieContext";
import { AuthProvider } from "./contexts/AuthContext";

import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
      <MovieProvider>
        <Navbar />
        <MovieList />
      </MovieProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
