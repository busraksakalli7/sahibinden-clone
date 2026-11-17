import React from 'react';
import { Tabs } from 'antd';
import '../../styles/descriptionTabs.css'; 

const DescriptionTabs = ({ description, location }) => {

  // Sekme İçerikleri
  const items = [
    {
      key: '1',
      label: 'İlan Detayları',
      children: (
        <div className="tab-content">
          <h3 className="tab-section-title">Açıklama</h3>
          <div className="description-text">
            {/* Örnek veri */}
            {description ? description.split('\n').map((line, i) => (
                <p key={i} style={{ margin: '0 0 5px 0' }}>{line}</p>
            )) : <p>Açıklama bulunmamaktadır.</p>}
          </div>
        </div>
      ),
    },
    {
      key: '2',
      label: 'Konumu ve Sokak Görünümü',
      children: (
        <div className="tab-content">
          <h3 className="tab-section-title">Konum Bilgisi</h3>
          <p>İl/İlçe: {location || 'Belirtilmemiş'}</p>
          <div style={{ width: '100%', height: '200px', background: '#eee', display:'flex', alignItems:'center', justifyContent:'center', color:'#999' }}>
            Google map entegrasyonu burada olacak.
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="description-tabs-container">
      <Tabs 
        defaultActiveKey="1" 
        type="card" 
        items={items} 
        className="custom-tabs"
      />
    </div>
  );
};

export default DescriptionTabs;