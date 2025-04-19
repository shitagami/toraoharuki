import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>ICHIFUZI</h3>
            <p>〒259-1131 神奈川県伊勢原市伊勢原2丁目5-4 0 1fb</p>
            <p>TEL: 03-1234-5678</p>
          </div>
          <div className="footer-section">
            <h3>営業時間</h3>
            <p>19:00 - 2:00</p>
            <p>定休日: 日曜日</p>
          </div>
          <div className="footer-section">
            <h3>アクセス</h3>
            <p>伊勢原駅から徒歩5分</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 ICHIFUZI All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 