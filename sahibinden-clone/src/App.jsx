// src/App.jsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import AppRouter from "./router/AppRouter"; 
// YENİ: AuthProvider'ı import et
import { AuthProvider } from "./context/AuthContext";

import "./styles/globals.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <MainLayout>
          <AppRouter />
        </MainLayout>
      </Router>
    </AuthProvider>
  );
}

export default App;