import React from 'react';
import { List, Card, Typography, Divider } from 'antd';
const { Title, Link } = Typography;

const FooterListings = ({ items }) => {
  if (!items) return null;
  
  return (
    <div className="footer-listings-wrapper">
       <div className="showcase-header-wrapper">
          <Title level={5} style={{ margin: 0, color: '#333' }}>İlginç İlanlar</Title>
          <Link href="#" style={{ fontSize: '12px' }}>Tüm ilginç ilanları göster</Link>
      </div>
      <Divider style={{ margin: '10px 0 20px 0' }} />

      <List
        grid={{ gutter: 16, xs: 2, sm: 3, md: 4, lg: 7, xl: 7 }}
        dataSource={items}
        renderItem={(item) => (
          <List.Item>
            <Card className="footer-listing-card" hoverable>
              <img src={item.image} alt={item.title} className="footer-listing-img" />
              <div className="footer-listing-title">{item.title}</div>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default FooterListings;