import React from 'react';
import { Card, Descriptions, Typography, Divider } from 'antd';

const { Title, Link, Text } = Typography;

const InfoTable = ({ id, price, location, data }) => {
  return (
    <Card
      bordered={true}
      style={{
        width: '100%',
        borderColor: '#e6e6e6', 
        borderRadius: '2px',   
        boxShadow: 'none',      
      }}
      bodyStyle={{ padding: '15px' }}
    >
      {/* --- FİYAT VE LOKASYON --- */}
      <div style={{ marginBottom: '15px' }}>
        <Title level={3} style={{ color: '#2d6cae', margin: 0, fontWeight: 700, fontSize: '24px' }}>
          {price}
        </Title>
        <div style={{ marginTop: '5px' }}>
          <Link href="#" style={{ color: '#2d6cae', fontSize: '13px', fontWeight: 500 }}>
            {location}
          </Link>
        </div>
      </div>

      <Divider style={{ margin: '12px 0' }} />

      {/* --- DETAY TABLOSU --- */}
      <Descriptions
        bordered
        column={1} 
        size="small"
        labelStyle={{ 
            fontWeight: 'bold', 
            width: '120px', 
            backgroundColor: '#fff', // Etiket arka planı beyaz
            color: '#333',
            fontSize: '12px',
            padding: '8px 0',
            borderBottom: '1px solid #f0f0f0' // Sadece alt çizgi
        }}
        contentStyle={{ 
            backgroundColor: '#fff',
            color: '#000',
            fontSize: '12px',
            padding: '8px 0 8px 10px',
            borderBottom: '1px solid #f0f0f0'
        }}
      >
        <Descriptions.Item label="İlan No">
          <Text style={{ color: '#cc0000', fontWeight: 'bold' }}>{id}</Text>
        </Descriptions.Item>

        <Descriptions.Item label="İlan Tarihi">
          {data?.date || 'Bugün'}
        </Descriptions.Item>

        <Descriptions.Item label="Marka">
          {data?.brand}
        </Descriptions.Item>

        <Descriptions.Item label="Seri">
          {data?.series || 'Yok'}
        </Descriptions.Item>

        <Descriptions.Item label="Model">
          {data?.model}
        </Descriptions.Item>

        <Descriptions.Item label="Yıl">
          {data?.year}
        </Descriptions.Item>

      </Descriptions>
    </Card>
  );
};

export default InfoTable;