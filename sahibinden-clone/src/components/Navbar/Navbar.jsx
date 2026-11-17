import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SearchOutlined, UserOutlined, LogoutOutlined, DownOutlined, AppstoreOutlined, MessageOutlined, HeartOutlined } from '@ant-design/icons';
import { Dropdown, Space, Avatar } from "antd"; // Menu bileşenini import etmeye gerek kalmadı
import { useAuth } from "../../context/AuthContext";
import "../../styles/navbar.css";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const { currentUser, isAuthenticated, logout } = useAuth();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/listings?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // --- DÜZELTME: Ant Design v5 için Menü Yapısı (Items Array) ---
  // Eski <Menu> bileşeni yerine bu dizi formatı kullanılır.
  const items = [
    {
      key: '1',
      label: <Link to="/my-listings">İlanlarım</Link>,
      icon: <AppstoreOutlined />,
    },
    {
      key: '2',
      label: <Link to="/messages">Mesajlarım</Link>,
      icon: <MessageOutlined />,
    },
    {
      key: '3',
      label: <Link to="/favorites">Favori İlanlarım</Link>,
      icon: <HeartOutlined />,
    },
    {
      type: 'divider', // Menü arasına çizgi çeker
    },
    {
      key: '4',
      label: 'Çıkış Yap',
      icon: <LogoutOutlined />,
      danger: true, // Yazıyı kırmızı yapar
      onClick: logout, // Çıkış fonksiyonunu tetikler
    },
  ];

  return (
    <nav className="sahibinden-navbar">
      <div className="container">
        
        {/* SOL TARAFA LOGO */}
        <div className="nav-left">
          <Link to="/" className="logo-link">
            <img
              src="/src/assets/icons/logo.png"
              alt="Sahibinden"
              className="sahibinden-logo"
            />
          </Link>
        </div>

        {/* ORTA KISIM: ARAMA */}
        <div className="search-container">
          <div className="search-wrapper">
            <input
              className="search-box"
              type="text"
              placeholder="Kelime, ilan no veya mağaza adı ile ara"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              aria-label="Arama"
            />
            <span className="search-icon" aria-hidden="true">
              <SearchOutlined />
            </span>
          </div>
          <Link to="/detayli-arama" className="detailed-search-link">
            Detaylı Arama
          </Link>
        </div>

        {/* SAĞ TARAFA BUTONLAR */}
        <div className="nav-right">
          
          {isAuthenticated ? (
            // --- GİRİŞ YAPILMIŞSA ---
            <div className="user-logged-in-area">
              {/* DÜZELTME: overlay yerine menu={{ items }} kullanıyoruz */}
              <Dropdown menu={{ items }} trigger={['click']}>
                <a className="user-dropdown-link" onClick={(e) => e.preventDefault()}>
                  <Space>
                    <Avatar size="small" icon={<UserOutlined />} style={{ backgroundColor: '#fff', color: '#333' }} />
                    <span className="username-text">{currentUser?.name}</span>
                    <DownOutlined style={{ fontSize: '10px' }} />
                  </Space>
                </a>
              </Dropdown>
            </div>
          ) : (
            // --- GİRİŞ YAPILMAMIŞSA ---
            <>
              <Link to="/auth/login" className="login-btn">
                Giriş Yap
              </Link>
              <Link to="/auth/register" className="register-btn">
                Hesap Aç
              </Link>
            </>
          )}

          <button className="ad-btn">Ücretsiz* İlan Ver</button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;