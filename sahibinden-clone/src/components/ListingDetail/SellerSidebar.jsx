import React from 'react';
import { Card, Typography, Button, Space } from 'antd';
import { MessageOutlined, SafetyCertificateOutlined } from '@ant-design/icons';

const { Title, Text, Link } = Typography;

const SellerSidebar = ({ seller }) => {
  console.log('SellerSidebar seller:', seller);
  // Eğer JSON'dan satıcı verisi gelmezse varsayılan göster
  const sellerInfo = seller || { name: "Bilinmeyen Satıcı", date: "-", phone: "-" };

  return (
    <Card
      style={{
        width: '100%',
        marginTop: '15px',
        borderColor: '#e6e6e6',
        borderRadius: '2px',
        boxShadow: 'none'
      }}
      bodyStyle={{ padding: '15px' }}
    >
      <div style={{ marginBottom: '10px' }}>
        <Title level={4} style={{ margin: 0, fontSize: '15px', fontWeight: 700, color: '#333' }}>
          {sellerInfo.name}
        </Title>
        <Text type="secondary" style={{ fontSize: '11px', display:'block', marginTop:'2px' }}>
          Hesap açma tarihi: {sellerInfo.date}
        </Text>
      </div>

      <div style={{ 
            backgroundColor: '#fbfbfb', 
            border: '1px solid #eee', 
            padding: '10px', 
            marginBottom: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
      }}>
         <span style={{ fontWeight: 'bold', fontSize: '13px', color:'#333' }}>Cep</span>
         <span style={{ fontWeight: 'bold', fontSize: '14px', color:'#333' }}>{sellerInfo.phone}</span>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
         <Button type="link" icon={<MessageOutlined />} style={{ fontWeight: '600', color: '#1657c8', fontSize: '13px' }}>
            Mesaj Gönder
         </Button>
      </div>

      <div style={{ border: '1px solid #eee', padding: '10px', display: 'flex', gap: '10px' }}>
          <SafetyCertificateOutlined style={{ fontSize: '20px', color: '#1657c8' }} />
          <div>
              <Text strong style={{ fontSize: '12px', display: 'block', color: '#333' }}>Güvenlik İpuçları</Text>
              <Text style={{ fontSize: '10px', color: '#666', lineHeight: '1.3', display:'block' }}>
                 Satıcıyla yüz yüze görüşüp alacağınız ürünü görmeden kapora ödemeyin.
              </Text>
          </div>
      </div>
    </Card>
  );
};

export default SellerSidebar;