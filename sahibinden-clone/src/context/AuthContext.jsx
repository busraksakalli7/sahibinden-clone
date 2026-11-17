import React, { createContext, useState, useEffect, useContext } from "react";

// 1. Context'i oluşturuyoruz
const AuthContext = createContext();

// 2. Provider bileşeni: Bu, tüm uygulamayı sarmalayacak
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Uygulama ilk açıldığında LocalStorage'a bak (Beni Hatırla mantığı)
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  // Giriş yapma fonksiyonu
  const login = (userData) => {
    // Şimdilik sahte bir giriş yapıyoruz
    setCurrentUser(userData);
    setIsAuthenticated(true);
    // Veriyi tarayıcıya kaydet ki sayfa yenilenince gitmesin
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const register = (formData) => {
    // Artık ismi e-postadan uydurmuyoruz, formdan gelen gerçek veriyi kullanıyoruz.
    // formData içinde: { email, password, name, surname } olacak.
    
    const fullName = `${formData.name} ${formData.surname}`;

    const newUser = {
      id: Date.now(),
      name: fullName, // Gerçek Ad Soyad
      email: formData.email,
      role: "user"
      // Şifreyi gerçek senaryoda hash'lememiz gerekir ama şimdilik böyle saklıyoruz.
    };

    setCurrentUser(newUser);
    setIsAuthenticated(true);
    localStorage.setItem("user", JSON.stringify(newUser));
  };
  // -------------------------------------------

  // Çıkış yapma fonksiyonu
  const logout = () => {
    setCurrentUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("user");
  };

  // Bu değerleri dışarıya açıyoruz
  const values = {
    currentUser,
    isAuthenticated,
    login,
    register, // <-- register fonksiyonunu buraya ekledik
    logout
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

// 3. Kullanımı kolaylaştırmak için özel bir Hook yazıyoruz
export const useAuth = () => useContext(AuthContext);