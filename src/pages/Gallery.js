import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'すべて' },
    { id: 'interior', name: '店内' },
    { id: 'food', name: '料理' },
    { id: 'drink', name: 'ドリンク' }
  ];

  const images = [
    { id: 1, src: '/images/gallery/interior1.jpg', category: 'interior' },
    { id: 2, src: '/images/gallery/interior2.jpg', category: 'interior' },
    { id: 3, src: '/images/gallery/food1.jpg', category: 'food' },
    { id: 4, src: '/images/gallery/food2.jpg', category: 'food' },
    { id: 5, src: '/images/gallery/drink1.jpg', category: 'drink' },
    { id: 6, src: '/images/gallery/drink2.jpg', category: 'drink' },
    { id: 7, src: '/images/gallery/interior3.jpg', category: 'interior' },
    { id: 8, src: '/images/gallery/food3.jpg', category: 'food' },
    { id: 9, src: '/images/gallery/drink3.jpg', category: 'drink' }
  ];

  const filteredImages = activeCategory === 'all'
    ? images
    : images.filter(image => image.category === activeCategory);

  return (
    <div className="gallery-page">
      <section className="gallery-hero">
        <h1>ギャラリー</h1>
      </section>

      <section className="gallery-content">
        <div className="container">
          <div className="category-filter">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filteredImages.map(image => (
              <div key={image.id} className="gallery-item">
                <img src={image.src} alt={`ギャラリー画像 ${image.id}`} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery; 