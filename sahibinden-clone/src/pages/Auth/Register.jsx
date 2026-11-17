import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Input, Button, Row, Col, Checkbox } from "antd";
import { GoogleOutlined, AppleFilled, RightOutlined, InfoCircleOutlined, EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import "../../styles/login.css";
import { useAuth } from "../../context/AuthContext";
import logo from "../../assets/icons/logo.png";

const Register = () => {
  const [form] = Form.useForm();
  const { register } = useAuth();
  const navigate = useNavigate();

  // Formun genişleyip genişlemediğini kontrol eden state
  const [isFormExpanded, setIsFormExpanded] = useState(false);

  // 1. Aşama: Sadece E-posta kontrolü
  const handleEmailSubmit = async () => {
    try {
      // Sadece email alanını validate et
      await form.validateFields(['email']);
      // Hata yoksa formu genişlet
      setIsFormExpanded(true);
    } catch (error) {
      console.log("E-posta geçerli değil:", error);
    }
  };

  // 2. Aşama: Tüm formun gönderilmesi
  const onFinish = (values) => {
    console.log("Tüm Kayıt Değerleri:", values);
    register(values); // Context'e gönder
    navigate("/"); // Anasayfaya git
  };

  return (
    <div className="sahibinden-login-page">
      <div className="login-header">
        <Link to="/">
          <img src={logo} alt="sahibinden.com" className="brand-logo-img" />
        </Link>
      </div>

      <div className="login-container-card">
        <h2 className="login-heading">Hesap aç</h2>

        <Form
          form={form}
          name="register_form"
          layout="vertical"
          initialValues={{ remember: false }}
          onFinish={onFinish}
          requiredMark={false}
        >
          {/* --- E-POSTA ALANI (Her zaman görünür) --- */}
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
              suffix={<InfoCircleOutlined className="input-info-icon" />}
              // Form açıldıysa e-postayı değiştiremesin (disabled olsun)
              disabled={isFormExpanded} 
              autoComplete="email"
            />
          </Form.Item>


          {/* --- GENİŞLEYEN ALAN (Sadece isFormExpanded true ise görünür) --- */}
          {isFormExpanded ? (
            <>
              {/* Ad ve Soyad Yan Yana */}
              <Row gutter={10}>
                <Col span={12}>
                  <Form.Item
                    name="name"
                    rules={[{ required: true, message: 'Ad giriniz.' }]}
                  >
                    {/* autoComplete="given-name": Tarayıcıya buranın İsim olduğunu söyler */}
                    <Input 
                        placeholder="Ad" 
                        className="sahibinden-input" 
                        autoComplete="given-name"
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="surname"
                    rules={[{ required: true, message: 'Soyad giriniz.' }]}
                  >
                    <Input 
                        placeholder="Soyad" 
                        className="sahibinden-input" 
                        autoComplete="family-name"
                    />
                  </Form.Item>
                </Col>
              </Row>

              {/* Şifre Alanı */}
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: 'Şifre belirleyiniz.' },
                  { min: 6, message: 'Şifre en az 6 karakter olmalı.' }
                ]}
              >
                {/* autoComplete="new-password": Tarayıcıya bunun yeni şifre olduğunu söyler */}
                <Input.Password
                  placeholder="Şifre"
                  className="sahibinden-input"
                  iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                  autoComplete="new-password"
                />
              </Form.Item>

              {/* Sözleşme Checkboxları */}
              <div style={{ marginBottom: 20 }}>
                 <Form.Item name="agreement" valuePropName="checked" rules={[{ validator: (_, value) => value ? Promise.resolve() : Promise.reject(new Error('Sözleşmeyi kabul etmelisiniz.')) }]}>
                    <Checkbox className="sahibinden-checkbox">
                      <a href="#">Bireysel Hesap Sözleşmesi ve Ekleri</a>'ni kabul ediyorum.
                    </Checkbox>
                 </Form.Item>
                 
                 <Form.Item name="campaign" valuePropName="checked" noStyle>
                    <Checkbox className="sahibinden-checkbox" style={{ marginTop: 10 }}>
                      Kampanya ve tanıtım e-postaları almak istiyorum.
                    </Checkbox>
                 </Form.Item>
              </div>

              {/* SON AŞAMA BUTONU: HESAP AÇ */}
              <Form.Item>
                <Button type="primary" htmlType="submit" block className="sahibinden-submit-btn">
                  Hesap Aç
                </Button>
              </Form.Item>
            </>
          ) : (
            // --- İLK AŞAMA BUTONU: E-POSTA İLE DEVAM ET ---
            <Form.Item style={{ marginTop: '20px' }}>
              <Button 
                type="primary" 
                onClick={handleEmailSubmit} // Tıklanınca sadece genişletir, submit etmez
                block 
                className="sahibinden-submit-btn"
              >
                E-posta ile hesap aç
              </Button>
            </Form.Item>
          )}

          {/* Form Açılmadıysa Giriş Linki Göster (Sahibinden mantığı) */}
          {!isFormExpanded && (
            <div className="register-text login-link-text">
              Zaten hesabın var mı?{' '}
              <Link to="/auth/login" className="register-link">
                 Giriş yap 
                 <RightOutlined style={{ fontSize: '10px', marginLeft: '5px' }} />
              </Link>
            </div>
          )}

          {/* Alt Kısım (Sosyal Login vs) - Form açılınca gizlenebilir veya kalabilir, genelde kalır */}
          <div className="divider-wrapper">
            <span className="divider-line"></span>
            <span className="divider-content">VEYA</span>
            <span className="divider-line"></span>
          </div>

          <Button block className="social-login-btn google-btn" icon={<GoogleOutlined />}>
            Google ile hesap aç
          </Button>
          
          <Button block className="social-login-btn apple-btn" icon={<AppleFilled />}>
            Apple ile hesap aç
          </Button>

        </Form>
      </div>
       
       {/* Footer Yazısı */}
       <div className="login-footer-text register-footer-text">
        Kişisel verilerin korunması hakkında detaylı bilgiye <a href="#">buradan</a> ulaşabilirsiniz.
      </div>
    </div>
  );
};

export default Register;