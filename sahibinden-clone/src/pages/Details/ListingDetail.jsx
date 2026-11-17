import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Breadcrumb, Typography, Button } from 'antd';
import { HeartOutlined, ShareAltOutlined, PrinterOutlined } from '@ant-design/icons';
import "../../styles/listingDetail.css";

// Component Importları
import Gallery from '../../components/ListingDetail/Gallery';
import InfoTable from '../../components/ListingDetail/InfoTable';
import SellerSidebar from '../../components/ListingDetail/SellerSidebar';
import DescriptionTabs from '../../components/ListingDetail/DescriptionTabs';

// Veri
import listingsData from '../../data/listings.json';

const { Title } = Typography;

const ListingDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    // Veri çekme
    const foundItem = listingsData.showcase.find(item => item.id.toString() === id);
    if (foundItem) {
      setData(foundItem);
    } else {
      setData({
        title: "İlan Bulunamadı",
        price: "0 TL",
        location: "Bilinmiyor",
        image: "https://via.placeholder.com/800x600",
        description: "Açıklama bulunamadı."
      });
    }
  }, [id]);

  if (!data) return <div style={{ padding: 50, textAlign: 'center' }}>Yükleniyor...</div>;

  return (
    <div className="detail-container" style={{ backgroundColor: '#fff', paddingTop: '15px' }}>
      <div className="container">
        
        {/* Breadcrumb */}
        <div className="detail-breadcrumb" style={{ marginBottom: '10px' }}>
           <Breadcrumb 
             separator=">"
             items={[
               { title: 'Anasayfa' }, 
               { title: data.brand || 'Vasıta' }, 
               { title: data.model || 'İlan Detay' }
             ]} 
           />
        </div>

        {/* Başlık Alanı */}
        <div className="detail-header" style={{ borderBottom: '1px solid #e0e0e0', paddingBottom: '10px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
             <Title level={1} style={{ margin: 0, color: '#333', fontWeight: 700, fontSize: '18px' }}>
                {data.title}
             </Title>
             <div className="header-actions">
                <Button type="text" size="small" icon={<HeartOutlined />} style={{ fontSize: '12px', color: '#666' }}>Favorilerime Ekle</Button>
                <Button type="text" size="small" icon={<ShareAltOutlined />} style={{ fontSize: '12px', color: '#666' }}>Paylaş</Button>
                <Button type="text" size="small" icon={<PrinterOutlined />} style={{ fontSize: '12px', color: '#666' }}>Yazdır</Button>
             </div>
          </div>
        </div>
        
        {/* --- 1. SATIR: GALERİ VE SAĞ PANEL --- */}
        <Row gutter={20}> 
          
          {/* SOL: GALERİ */}
          <Col xs={24} lg={10}>
            <Gallery image={data.image} />
            {/* DescriptionTabs BURADAN KALDIRILDI */}
          </Col>

          {/* SAĞ: BİLGİ VE SATICI */}
          <Col xs={24} lg={14}>
              <Row gutter={15}>
                  <Col xs={24} md={14}> 
                      <InfoTable 
                        id={id} 
                        price={data.price} 
                        location={data.location} 
                        data={data}
                      />
                  </Col>
                  <Col xs={24} md={10}>
                      <SellerSidebar seller={data.seller} />
                  </Col>
              </Row>
          </Col> 
        </Row>

        {/* --- 2. SATIR: TAM GENİŞLİK AÇIKLAMA ALANI (YENİ YERİ) --- */}
        <Row style={{ marginTop: '20px' }}>
            <Col span={24}>
                <DescriptionTabs 
                    description={data.description} 
                    location={data.location}
                />
            </Col>
        </Row>

      </div>
    </div>
  );
};

export default ListingDetail;