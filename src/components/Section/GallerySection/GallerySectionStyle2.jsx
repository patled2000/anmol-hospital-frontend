 import React, { useState } from 'react';
import Portfolio from '../../Portfolio';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import './GallerysectionStyle2.css';

export default function GallerySectionStyle2({ data }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const categories = ['All', ...new Set(data.map((item) => item.category))];

  const filteredData =
    activeCategory === 'All'
      ? data
      : data.filter((item) => item.category === activeCategory);

  const openLightbox = (imgUrl) => {
    const index = filteredData.findIndex((item) => item.imgUrl === imgUrl);
    setPhotoIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="container">
      {/* Filter Buttons */}
      <div className="cs_filter_buttons mb-4 text-center">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(category)}
            className={`cs_filter_btn ${activeCategory === category ? 'active' : ''}`}
            style={{
              margin: '0 10px',
              padding: '10px 20px',
              border: '1px solid #ccc',
              backgroundColor: activeCategory === category ? '#0054A6' : '#fff',
              color: activeCategory === category ? '#fff' : '#000',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="cs_gallery_grid_2">
        {filteredData.map((item, index) => (
          <div
            className="cs_grid_item"
            key={index}
            onClick={() => openLightbox(item.imgUrl)}
            style={{ cursor: 'pointer' }}
          >
            <Portfolio {...item} />
            <div className="text-center mt-2">
              <span className="cs_category_name">{item.category}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && filteredData.length > 0 && (
        <Lightbox
          mainSrc={filteredData[photoIndex].imgUrl}
          nextSrc={filteredData[(photoIndex + 1) % filteredData.length].imgUrl}
          prevSrc={
            filteredData[
              (photoIndex + filteredData.length - 1) % filteredData.length
            ].imgUrl
          }
          onCloseRequest={() => setLightboxOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + filteredData.length - 1) % filteredData.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % filteredData.length)
          }
          enableZoom={false}
          preloadNextImage={true}
        />
      )}
    </div>
  );
}
