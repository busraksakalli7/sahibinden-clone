import React from 'react';
import { List, Space, Typography, Divider } from 'antd';
import { 
  ExclamationCircleOutlined, ClockCircleOutlined, HomeFilled, CarFilled, 
  ShoppingFilled, ShoppingCartOutlined, CarOutlined, HomeOutlined, 
  TruckFilled, HighlightFilled, BookFilled, IdcardFilled, BugFilled, 
  PlusCircleFilled, CommentOutlined, SmileOutlined, StarOutlined 
} from '@ant-design/icons';

const { Text, Link } = Typography;

// İkonları tanımlıyoruz
const iconMap = {
  exclamation: <ExclamationCircleOutlined />,
  clock: <ClockCircleOutlined />,
  home: <HomeFilled />,
  car: <CarFilled />,
  shopping: <ShoppingFilled />,
  market: <ShoppingCartOutlined />,
  truck: <TruckFilled />,
  highlight: <HighlightFilled />,
  book: <BookFilled />,
  idcard: <IdcardFilled />,
  bug: <BugFilled />,
  plusCircle: <PlusCircleFilled />,
  comment: <CommentOutlined />,
  smile: <SmileOutlined />,
  star: <StarOutlined />,
};

const HomeSidebar = ({ data }) => {
  return (
    <div className="sidebar-container">
      {/* 1. Özel Linkler (Acil, 48 Saat vb.) */}
      <List
        size="small"
        dataSource={data.specialMenu}
        split={false}
        renderItem={item => (
          <List.Item className="special-list-item">
            <Space>
              {iconMap[item.icon] && React.cloneElement(iconMap[item.icon], { style: { color: '#999', fontSize: '16px' } })}
              <Link href="#" style={{ color: '#333' }}>{item.title}</Link>
            </Space>
          </List.Item>
        )}
      />
      <Divider style={{ margin: '12px 0' }} />

      {/* 2. Başlıklar (Yepyeni vb.) */}
      {data.baslik && data.baslik.map(item => (
        <div key={item.id} className="baslik-item">
          <Text strong style={{ fontSize: '13px', color: '#333' }}>{item.title}</Text>
        </div>
      ))}
      {data.baslik && <Divider style={{ margin: '12px 0' }} />}

      {/* 3. Oto360 & Emlak360 (Sol Menüdeki Başlıklar) */}
      {data.categoryAuto && data.categoryAuto.map((cat) => (
        <div key={cat.key} className="category-block">
          <div className="category-header">
            <Space align="center">
              <span className="cat-icon-wrapper"><CarOutlined style={{ color: '#d13737', fontSize: '18px' }} /></span>
              <Link href="#" strong className="main-cat-link">{cat.title}</Link>
            </Space>
          </div>
          {cat.subItems && (
            <List
              size="small" split={false} dataSource={cat.subItems} className="sub-cat-list"
              renderItem={sub => (
                <List.Item style={{ padding: '2px 0 2px 28px' }}><Link href="#" className="sub-cat-link">{sub.label}</Link></List.Item>
              )}
            />
          )}
          <div style={{ marginBottom: 15 }}></div>
        </div>
      ))}
      <Divider style={{ margin: '12px 0' }} />

      {data.categoryEmlak && data.categoryEmlak.map((cat) => (
         <div key={cat.key} className="category-block">
          <div className="category-header">
            <Space align="center">
              <span className="cat-icon-wrapper"><HomeOutlined style={{ color: '#f2c300', fontSize: '18px' }} /></span>
              <Link href="#" strong className="main-cat-link">{cat.title}</Link>
            </Space>
          </div>
          <div style={{ marginBottom: 15 }}></div>
        </div>
      ))}
      <Divider style={{ margin: '12px 0' }} />

      {/* 4. Ana Kategoriler ve SEÇTİKLERİMİZ */}
      {data.categories.map((cat) => (
        <div key={cat.key} className="category-block">
          <div className="category-header">
            <Space align="center">
              <span className="cat-icon-wrapper">
                 {iconMap[cat.icon] && React.cloneElement(iconMap[cat.icon], { style: { color: cat.color } })}
              </span>
              <Link href="#" strong className="main-cat-link">{cat.title}</Link>
              {cat.count && <Text type="secondary" style={{ fontSize: '11px' }}>({cat.count})</Text>}
            </Space>
          </div>

          {cat.subItems && (
            <List
              size="small" split={false} dataSource={cat.subItems} className="sub-cat-list"
              renderItem={sub => (
                <List.Item style={{ padding: '2px 0 2px 28px' }}>
                  <Space size={4}>
                    <Link href="#" className="sub-cat-link">{sub.label}</Link>
                    <Text type="secondary" style={{ fontSize: '11px' }}>({sub.count})</Text>
                  </Space>
                </List.Item>
              )}
            />
          )}

          {/* --- İŞTE EKSİK OLAN KISIM BURASIYDI --- */}
          {/* Sadece "Yardımcı Arayanlar" kategorisinin altına Seçtiklerimiz'i ekliyoruz */}
          {cat.key === 'yardimci_arayanlar' && data.sectiklerimiz && (
            <div className="secktiklerimiz-wrapper">
               <div className="secktiklerimiz-title">Seçtiklerimiz</div>
               <div className="secktiklerimiz">
                 {data.sectiklerimiz.map(item => (
                   <div key={item.id} className="secktiklerimiz-item">
                     <span className="icon-circle" style={{ background: item.color || '#999' }}>
                       {iconMap[item.icon] && React.cloneElement(iconMap[item.icon], { style: { color: '#fff', fontSize: '14px' } })}
                     </span>
                     <Link href="#" className="seck-link">{item.title}</Link>
                   </div>
                 ))}
               </div>
            </div>
          )}
          {/* --------------------------------------- */}

          <div style={{ marginBottom: 15 }}></div>
        </div>
      ))}
    </div>
  );
};

export default HomeSidebar;