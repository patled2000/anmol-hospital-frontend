 import React, { useState, useMemo } from 'react';
import Portfolio from '../../Portfolio';
import './GallerysectionStyle2.css';

export default function GallerySectionStyle2({ data }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...new Set(data.map((item) => item.category))];

  const filteredData = useMemo(() => {
    return activeCategory === 'All'
      ? data
      : data.filter((item) => item.category === activeCategory);
  }, [data, activeCategory]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="container">
      {/* Filter Buttons */}
      <div className="cs_filter_buttons mb-4 text-center">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => handleCategoryChange(category)}
            className={`cs_filter_btn ${activeCategory === category ? 'active' : ''}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="cs_gallery_grid_2">
        {filteredData.map((item, index) => (
          <div key={index} className="cs_grid_item">
            <Portfolio {...item} />
            <div className="text-center mt-2">
              <span className="cs_category_name">{item.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
