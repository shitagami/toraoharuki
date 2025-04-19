import React from 'react';
import './Access.css';

const Access = () => {
  return (
    <div className="access">
      <section className="access-hero">
        <h1>アクセス</h1>
      </section>

      <section className="access-info">
        <div className="container">
          <div className="access-content">
            <div className="access-details">
              <h2>店舗情報</h2>
              <div className="info-item">
                <h3>住所</h3>
                <p>〒259-1131 神奈川県伊勢原市伊勢原2丁目5-4 0 1fb</p>
              </div>
              <div className="info-item">
                <h3>最寄駅</h3>
                <p>伊勢原駅から徒歩5分</p>
              </div>
              <div className="info-item">
                <h3>営業時間</h3>
                <p>19:00 - 2:00</p>
              </div>
              <div className="info-item">
                <h3>定休日</h3>
                <p>日曜日</p>
              </div>
              <div className="info-item">
                <h3>電話番号</h3>
                <p><a href="tel:03-1234-5678">0463-74-4811</a></p>
              </div>
            </div>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3252.345463177176!2d139.30769387624878!3d35.396686645551625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6019ab794423accb%3A0x9f0c63e26c8f1dce!2sICHIFUJI!5e0!3m2!1sja!2sjp!4v1745045178175!5m2!1sja!2sjp"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Access; 