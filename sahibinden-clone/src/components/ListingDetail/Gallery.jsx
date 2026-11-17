import React from 'react';
import "../../styles/listingDetail.css";

const Gallery = ({ image }) => {
  return (
    <div className="listing-gallery">
      
      {/* Büyük Resim Alanı */}
      <div className="main-image-wrapper" style={{ 
          border: '1px solid #e6e6e6', 
          padding: '5px', 
          backgroundColor: '#fff',
          height: '480px', // Yüksekliği artırdık, görseldeki gibi büyük dursun
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '10px'
      }}>
         <img 
            src={image} 
            alt="İlan Resmi" 
            className="main-image" 
            style={{ 
                maxWidth: '100%', 
                maxHeight: '100%', 
                objectFit: 'contain' // Resmi kesmeden sığdır
            }} 
         />
      </div>

      {/* Küçük Resimler (Thumbnails) */}
      <div className="thumbnail-list" style={{ display: 'flex', gap: '8px' }}>
         {/* Aktif Resim (Mavi Çerçeveli) */}
         <div className="thumb-item" style={{ 
             border: '2px solid #2d6cae', 
             padding: '2px', 
             width: '80px', 
             height: '60px', 
             cursor: 'pointer' 
         }}>
            <img src={image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
         </div>

         {/* Diğer Resimler (Gri Çerçeveli) */}
         <div className="thumb-item" style={{ border: '1px solid #ddd', padding: '2px', width: '80px', height: '60px', cursor: 'pointer' }}>
            <img src="https://picsum.photos/100/100?random=2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
         </div>
         <div className="thumb-item" style={{ border: '1px solid #ddd', padding: '2px', width: '80px', height: '60px', cursor: 'pointer' }}>
            <img src="https://picsum.photos/100/100?random=3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
         </div>
      </div>
    </div>
  );
};

export default Gallery;