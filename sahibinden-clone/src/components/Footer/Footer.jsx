import React from 'react';
import { Row, Col, Select } from 'antd';
import { PhoneFilled, QuestionCircleFilled, GlobalOutlined } from '@ant-design/icons';
import "../../styles/footer.css";

const { Option } = Select;

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        
        {/* --- ÜST KISIM: LİNKLER --- */}
        <Row gutter={[16, 32]}>
          <Col xs={12} sm={8} md={4}>
            <div className="footer-column-title">Kurumsal</div>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Hakkımızda</a></li>
              <li><a href="#" className="footer-link">Sürdürülebilirlik</a></li>
              <li><a href="#" className="footer-link">İnsan Kaynakları</a></li>
              <li><a href="#" className="footer-link">Haberler</a></li>
              <li><a href="#" className="footer-link">Site Haritası</a></li>
              <li><a href="#" className="footer-link">İletişim</a></li>
            </ul>
          </Col>

          <Col xs={12} sm={8} md={4}>
            <div className="footer-column-title">Hizmetlerimiz</div>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Doping</a></li>
              <li><a href="#" className="footer-link">S - Param Güvende</a></li>
              <li><a href="#" className="footer-link">Güvenli e-Ticaret (GeT)</a></li>
              <li><a href="#" className="footer-link">Reklam</a></li>
              <li><a href="#" className="footer-link">Mobil</a></li>
              <li><a href="#" className="footer-link">Auto King</a></li>
            </ul>
          </Col>

          <Col xs={12} sm={8} md={4}>
            <div className="footer-column-title">Mağazalar</div>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Neden Mağaza?</a></li>
              <li><a href="#" className="footer-link">Mağaza Açmak İstiyorum</a></li>
            </ul>
          </Col>

          <Col xs={12} sm={8} md={6}>
            <div className="footer-column-title">Gizlilik ve Kullanım</div>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Güvenli Alışverişin İpuçları</a></li>
              <li><a href="#" className="footer-link">Sözleşmeler ve Kurallar</a></li>
              <li><a href="#" className="footer-link">Hesap Sözleşmesi</a></li>
              <li><a href="#" className="footer-link">Kullanım Koşulları</a></li>
              <li><a href="#" className="footer-link">Kişisel Verilerin Korunması</a></li>
              <li><a href="#" className="footer-link">Çerez Yönetimi</a></li>
              <li><a href="#" className="footer-link">Yardım ve İşlem Rehberi</a></li>
            </ul>
          </Col>

          <Col xs={12} sm={8} md={4}>
            <div className="footer-column-title">Bizi Takip Edin</div>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Sahiblog</a></li>
              <li><a href="#" className="footer-link">Facebook</a></li>
              <li><a href="#" className="footer-link">X (Twitter)</a></li>
              <li><a href="#" className="footer-link">Linkedin</a></li>
              <li><a href="#" className="footer-link">Instagram</a></li>
              <li><a href="#" className="footer-link">Youtube</a></li>
            </ul>
          </Col>
        </Row>

        {/* --- ORTA KISIM: İLETİŞİM VE DİL --- */}
        <div className="footer-middle-row">
          {/* Sol: İletişim Bilgileri */}
          <div className="contact-info-wrapper">
            <div className="contact-item">
              <div className="contact-icon-circle">
                <PhoneFilled />
              </div>
              <div className="contact-text">
                <h5>7/24 Müşteri Hizmetleri</h5>
                <span>0 850 222 44 44</span>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon-circle">
                <QuestionCircleFilled />
              </div>
              <div className="contact-text">
                <h5>Yardım Merkezi</h5>
                <span>yardim.sahibinden.com</span>
              </div>
            </div>
          </div>

          {/* Sağ: Dil Seçimi */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
             <Select defaultValue="tr" style={{ width: 150 }} bordered={true}>
               <Option value="tr">
                 <span style={{ marginRight: 8 }}>TR</span> Türkçe
               </Option>
               <Option value="en">
                 <span style={{ marginRight: 8 }}>EN</span> English
               </Option>
             </Select>
             {/* TR GO Logosu */}
             <div style={{ 
                 width: '40px', height: '40px', borderRadius: '50%', border:'2px solid #00aaff', 
                 display:'flex', alignItems:'center', justifyContent:'center', color:'#00aaff', fontWeight:'bold', fontSize:'10px', textAlign:'center', lineHeight:'1'
               }}>
               TR<br/>GO
             </div>
          </div>
        </div>

        {/* --- ALT KISIM: YASAL UYARI VE QR --- */}
        <div className="footer-bottom-row">
          <div className="legal-text-box">
            sahibinden.com'da yer alan kullanıcıların oluşturduğu tüm içerik, görüş ve bilgilerin doğruluğu, eksiksiz ve değişmez olduğu, yayınlanması ile ilgili yasal yükümlülükler içeriği oluşturan kullanıcıya aittir. Bu içeriğin, görüş ve bilgilerin yanlışlık, eksiklik veya yasalarla düzenlenmiş kurallara aykırılığından sahibinden.com hiçbir şekilde sorumlu değildir. Sorularınız için ilan sahibi ile irtibata geçebilirsiniz.
          </div>
          <div className="qr-code-box">
             {/*Temsili QR Kod */}
             <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" alt="ETBİS QR" />
             <span className="etbis-text">ETBİS'e Kayıtlıdır.</span>
          </div>
        </div>

        <div className="copyright-text">
          Copyright © 2000-2025 sahibinden.com (*) Bireysel hesap sahipleri için, limitli adetlerde, belirli kategorilerde ve belirli tekliflerde
        </div>

      </div>
    </footer>
  );
};

export default Footer;