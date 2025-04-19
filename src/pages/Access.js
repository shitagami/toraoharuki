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
                <p>〒123-4567 東京都渋谷区〇〇町1-2-3</p>
              </div>
              <div className="info-item">
                <h3>最寄駅</h3>
                <p>JR渋谷駅から徒歩5分</p>
                <p>東京メトロ〇〇線〇〇駅から徒歩3分</p>
              </div>
              <div className="info-item">
                <h3>営業時間</h3>
                <p>ランチ: 11:30 - 14:30</p>
                <p>ディナー: 17:30 - 22:00</p>
              </div>
              <div className="info-item">
                <h3>定休日</h3>
                <p>月曜日</p>
              </div>
              <div className="info-item">
                <h3>電話番号</h3>
                <p><a href="tel:03-1234-5678">03-1234-5678</a></p>
              </div>
            </div>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.396444816525!2d139.71190211525882!3d35.66735618019762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c9fa9e2e881%3A0x35396adb5ba7ce03!2z44K444O844K644Ki44Kr44OH44Of44O85p2x5Lqs!5e0!3m2!1sja!2sjp!4v1645000000000!5m2!1sja!2sjp"
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