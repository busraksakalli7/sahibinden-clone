import React from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { Form, Input, Button, Checkbox } from "antd";
import { GoogleOutlined, AppleFilled, EyeInvisibleOutlined, EyeTwoTone, RightOutlined } from "@ant-design/icons";
import "../../styles/login.css";

// Context Hook'unu çağırıyoruz
import { useAuth } from "../../context/AuthContext";
import logo from "../../assets/icons/logo.png"; 

const Login = () => {
  // 1. Context'ten login fonksiyonunu ve Router'dan navigate'i alıyoruz
  const { login } = useAuth(); 
  const navigate = useNavigate();

  // 2. Form başarıyla doldurulup butona basılınca bu çalışır
  const onFinish = (values) => {
    console.log("Form Değerleri:", values);

    // --- SİMÜLASYON ---
    // Normalde burada Backend'e (API) istek atılır.
    // Biz şimdilik sahte bir kullanıcı objesi oluşturuyoruz.
    const mockUser = {
      id: 1,
      name: "Stajyer Mühendis", // Navbar'da görünecek isim
      email: values.email,
      role: "user"
    };

    // 3. Context'teki login fonksiyonunu tetikle (Veriyi kaydeder)
    login(mockUser);

    // 4. Kullanıcıyı Anasayfaya yönlendir
    navigate("/");
  };

  return (
    <div className="sahibinden-login-page">
      
      {/* Logo Alanı */}
      <div className="login-header">
        <Link to="/">
          <img src={logo} alt="sahibinden.com" className="brand-logo-img" />
        </Link>
      </div>

      {/* Login Kartı */}
      <div className="login-container-card">
        
        <h2 className="login-heading">Giriş yap</h2>

        <Form
          name="login_form"
          layout="vertical"
          initialValues={{ remember: false }}
          onFinish={onFinish} // Form submit olunca yukarıdaki fonksiyon çalışacak
          requiredMark={false}
        >
          {/* E-Posta */}
          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Lütfen e-posta adresinizi girin.' },
              { type: 'email', message: 'Geçerli bir e-posta adresi girin.' }
            ]}
          >
            <Input 
              placeholder="E-posta adresi" 
              className="sahibinden-input"
            />
          </Form.Item>

          {/* Şifre */}
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Lütfen şifrenizi girin.' }]}
          >
            <Input.Password 
              placeholder="Şifre" 
              className="sahibinden-input"
              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
          </Form.Item>

          {/* Checkbox ve Şifremi Unuttum */}
          <div className="form-row-actions">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox className="sahibinden-checkbox">Oturumum açık kalsın</Checkbox>
            </Form.Item>
            <Link to="/forgot-password" className="forgot-pass-link">Şifremi unuttum</Link>
          </div>

          {/* Mavi Giriş Butonu */}
          <Form.Item style={{ marginTop: '20px' }}>
            <Button 
              type="primary" 
              htmlType="submit" 
              block 
              className="sahibinden-submit-btn"
            >
              E-posta ile giriş yap
            </Button>
          </Form.Item>

          {/* Hesap Aç Linki */}
          <div className="register-text">
            Henüz hesabın yok mu?{' '}
            <Link to="/auth/register" className="register-link">
               Hesap aç 
               <RightOutlined style={{ fontSize: '10px', marginLeft: '5px' }} />
            </Link>
          </div>

          {/* VEYA Ayırıcı */}
          <div className="divider-wrapper">
            <span className="divider-line"></span>
            <span className="divider-content">VEYA</span>
            <span className="divider-line"></span>
          </div>

          {/* Sosyal Butonlar */}
          <Button block className="social-login-btn google-btn" icon={<GoogleOutlined />}>
            Google ile giriş yap
          </Button>
          
          <Button block className="social-login-btn apple-btn" icon={<AppleFilled />}>
            Apple ile giriş yap
          </Button>

          {/* Yasal Metin */}
          <div className="legal-text">
            Google veya Apple kimliğinizle bir sonraki adıma geçmeniz halinde{' '}
            <a href="#">Bireysel Hesap Sözleşmesi</a> ve <a href="#">Ekleri</a>'ni kabul etmiş sayılırsınız.
          </div>
          
          {/* QR Link */}
          <div className="qr-section">
            QR kod ile mobil uygulamadan <a href="#">giriş yap <RightOutlined style={{ fontSize: '10px' }} /></a>
          </div>

        </Form>
      </div>

      {/* Footer Yazısı */}
      <div className="login-footer-text">
        Bu site reCAPTCHA ile korunmaktadır. <a href="#">Gizlilik Politikası</a> geçerlidir.
      </div>

    </div>
  );
};

export default Login;