import React from 'react';
import { Divider } from 'antd';

const HomePopularContent = ({ data }) => {
  if (!data) return null;

  return (
    <div className="popular-content-wrapper">
      
      {/* 1. Popüler Ürünler */}
      <div className="content-section">
        <h4 className="content-section-title">Popüler Ürünler</h4>
        <div className="popular-products-row">
          {data.popularProducts.map((item, index) => (
            <div key={index} className="pop-product-item">
              <img src={item.image} alt={item.title} className="pop-product-img" />
              <span className="pop-product-title">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
      <Divider style={{ margin: '20px 0' }} />

      {/* 2. Popüler Alışveriş Markaları */}
      <div className="content-section">
        <h4 className="content-section-title">Popüler Alışveriş Markaları</h4>
        <div className="brand-grid">
          {data.popularBrands.map((brand, index) => (
            <div key={index} className="brand-item" title={brand.name}>
              <img src={brand.logo} alt={brand.name} />
            </div>
          ))}
        </div>
      </div>

      {/* 3. Popüler Aramalar */}
      <div className="content-section">
        <h4 className="content-section-title">Popüler Aramalar</h4>
        <div className="tag-cloud">
          {data.popularSearches.map((tag, index) => (
            <a key={index} className="content-tag">{tag}</a>
          ))}
        </div>
      </div>

      {/* 4. Sıfır Araçlar Dünyası */}
      <div className="content-section">
        <h4 className="content-section-title">Sıfır Araçlar Dünyası</h4>
        <div className="tag-cloud">
          {data.zeroCarWorld.map((tag, index) => (
            <a key={index} className="content-tag">{tag}</a>
          ))}
        </div>
      </div>

      {/* 5. Popüler Hizmetler */}
      <div className="content-section">
        <h4 className="content-section-title">Popüler Hizmetler</h4>
        <div className="tag-cloud">
          {data.popularServices.map((tag, index) => (
            <a key={index} className="content-tag">{tag}</a>
          ))}
        </div>
      </div>

      {/* 6. Popüler İş İlanları */}
      <div className="content-section">
        <h4 className="content-section-title">Popüler İş İlanları</h4>
        <div className="tag-cloud">
          {data.popularJobs.map((tag, index) => (
            <a key={index} className="content-tag">{tag}</a>
          ))}
        </div>
      </div>

    </div>
  );
};

export default HomePopularContent;