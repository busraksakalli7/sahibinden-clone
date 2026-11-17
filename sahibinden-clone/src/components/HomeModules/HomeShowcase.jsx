import React from 'react';
import { Card, List, Typography, Divider } from 'antd';
import { useNavigate } from 'react-router-dom'; // 1. Router hook'unu import et

const { Title, Link } = Typography;

const HomeShowcase = ({ items }) => {
  const navigate = useNavigate(); // 2. Yönlendirme fonksiyonunu tanımla

  return (
    <>
      <div className="showcase-header-wrapper">
          <Title level={5} style={{ margin: 0, color: '#333' }}>Anasayfa Vitrini</Title>
          <Link href="#" style={{ fontSize: '12px' }}>Tüm vitrin ilanlarını göster</Link>
      </div>
      <Divider style={{ margin: '10px 0 20px 0' }} />
      
      <List
        grid={{ gutter: 16, xs: 2, sm: 3, md: 4, lg: 5, xl: 7, xxl: 7 }}
        dataSource={items}
        renderItem={(item) => (
          <List.Item>
            <Card
              hoverable
              className="vitrin-card"
              // 3. TIKLAMA OLAYINI EKLE
              // item.id'yi kullanarak doğru sayfaya yönlendiriyoruz
              onClick={() => navigate(`/ilan-detay/${item.id}`)}
              cover={
                <div className="card-img-container">
                  <img alt={item.title} src={item.image} />
                </div>
              }
            >
              <div className="card-title-text">{item.title}</div>
            </Card>
          </List.Item>
        )}
      />
    </>
  );
};

export default HomeShowcase;