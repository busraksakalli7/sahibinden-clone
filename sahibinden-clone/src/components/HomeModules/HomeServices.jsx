import React from 'react';
import { 
  LineChartOutlined, SwapOutlined, ToolOutlined, FileSearchOutlined, 
  PercentageOutlined, SketchOutlined, ShopOutlined, FileTextOutlined, 
  ReadOutlined, HomeFilled, MobileOutlined, SkinOutlined, TrophyOutlined, 
  PushpinOutlined 
} from '@ant-design/icons';

// Bu component kendi ikonlarını kullanır
const iconMap = {
  chart: <LineChartOutlined />,
  lineChart: <LineChartOutlined />,
  swap: <SwapOutlined />,
  wrench: <ToolOutlined />,
  fileSearch: <FileSearchOutlined />,
  percent: <PercentageOutlined />,
  sparkles: <SketchOutlined />,
  garage: <ShopOutlined />,
  fileText: <FileTextOutlined />,
  bookOpen: <ReadOutlined />,
  sofa: <HomeFilled />, 
  mobile: <MobileOutlined />,
  skin: <SkinOutlined />,
  bike: <TrophyOutlined />,
  pushpin: <PushpinOutlined />
};

const HomeServices = ({ links }) => {
  if (!links) return null;

  return (
    <div className="bottom-services-wrapper">
      {/* Oto360 */}
      <div className="service-section">
        <h3 className="service-header">{links.oto360.title}</h3>
        <div className="service-list">
          {links.oto360.items.map((item, index) => (
            <div key={index} className="service-item">
              {iconMap[item.icon] && React.cloneElement(iconMap[item.icon], { 
                style: { color: item.color || '#0097a7', fontSize: '20px' } 
              })}
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Emlak360 */}
      <div className="service-section">
        <h3 className="service-header">{links.emlak360.title}</h3>
        <div className="service-list">
          {links.emlak360.items.map((item, index) => (
            <div key={index} className="service-item">
              {iconMap[item.icon] && React.cloneElement(iconMap[item.icon], { 
                style: { color: item.color || '#0097a7', fontSize: '20px' } 
              })}
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Blog */}
      <div className="service-section" style={{ borderBottom: 'none' }}>
        <h3 className="service-header">{links.blog.title}</h3>
        <div className="service-list">
          {links.blog.items.map((item, index) => (
            <div key={index} className="service-item">
              <div className="blog-icon-circle" style={{ backgroundColor: item.color }}>
                  {iconMap[item.icon] && React.cloneElement(iconMap[item.icon], { style: { color: '#fff', fontSize: '18px' } })}
              </div>
              <span style={{ color: '#333' }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeServices;