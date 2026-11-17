import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "../styles/globals.css";

const MainLayout = ({ children }) => {
  const location = useLocation();

  // Navbar'ın GÖRÜNMESİNİ İSTEMEDİĞİN sayfaları buraya yaz
  const hideNavbarRoutes = ["/auth/login", "/auth/register"];

  // Eğer şu anki adres, yukarıdaki listede varsa 'false' olur
  const showNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {/* showNavbar true ise Navbar'ı göster, değilse gösterme */}
      {showNavbar && <Navbar />}
      
      <main className="main-content">
        {children}
      </main>

      {/* Footer her yerde görünsün istiyorsan buraya dokunma */}
      <Footer />
    </>
  );
};

export default MainLayout;