import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>レストラン名</h3>
            <p>〒123-4567 東京都渋谷区〇〇町1-2-3</p>
            <p>TEL: 03-1234-5678</p>
          </div>
          <div className="footer-section">
            <h3>営業時間</h3>
            <p>ランチ: 11:30 - 14:30</p>
            <p>ディナー: 17:30 - 22:00</p>
            <p>定休日: 月曜日</p>
          </div>
          <div className="footer-section">
            <h3>アクセス</h3>
            <p>JR渋谷駅から徒歩5分</p>
            <p>東京メトロ〇〇線〇〇駅から徒歩3分</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 レストラン名 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 