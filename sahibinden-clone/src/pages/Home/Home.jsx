import React from 'react';
import { Row, Col } from 'antd';
import "../../styles/home.css";
import listingsData from '../../data/listings.json';

// Component Importları
import HomeSidebar from '../../components/HomeModules/HomeSidebar';
import HomeShowcase from '../../components/HomeModules/HomeShowcase';
import HomeServices from '../../components/HomeModules/HomeServices';
import HousingProjects from '../../components/HomeModules/HousingProjects';
import FooterListings from '../../components/HomeModules/FooterListings';
import HomePopularContent from '../../components/HomeModules/HomePopularContent';
import Footer from '../../components/Footer/Footer'; 

const Home = () => {
  return (
    <>
    <div className="home-container">
      <div className="container">
        <Row gutter={24}>
          
          {/* --- SOL KOLON --- */}
          <Col xs={0} md={8} lg={6} className="sidebar-column">
            <HomeSidebar data={listingsData} />
          </Col>

          {/* --- SAĞ KOLON --- */}
          <Col xs={24} md={16} lg={18}>
            
            {/* 1. Vitrin */}
            <HomeShowcase items={listingsData.showcase} />

            {/* 2. Servisler */}
            <HomeServices links={listingsData.serviceLinks} />

            {/* 3. Konut Projeleri */}
            <HousingProjects projects={listingsData.konutProjeleri} />

            {/* 4. İlginç İlanlar */}
            <FooterListings items={listingsData.ilgincIlanlarFooter} />

            {/* 5. Popüler İçerik Alanı */}
            <HomePopularContent data={listingsData.popularContent} />

          </Col>
        </Row>
      </div>
    </div>
    </>
  );
};

export default Home;