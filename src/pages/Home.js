import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import aboutImage from '../images/ichifuzi/Sora Task 01 Image 0.webp';
import heroImage from '../images/ichifuzi/asd.webp';
import pastaImage from '../images/ichifuzi/pasta.webp';
import saladImage from '../images/ichifuzi/sarada.webp';
import cakeImage from '../images/ichifuzi/cake.webp';
import wineIcon from '../images/ichifuzi/Group 2.png';
import instagramIcon from '../images/ichifuzi/Group.png';

const Home = () => {
  return (
    <div className="home">
      <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-content">
          <h1>ICHIFUZI</h1>
          <p>最高の料理と空間で、特別なひとときをお過ごしください</p>
          <Link to="/menu" className="cta-button">メニューを見る</Link>
        </div>
      </section>

      <section className="scroll-indicator">
        <p>スクロールして詳細を見る</p>
        <div className="arrow-down"></div>
      </section>

      <section id="about" className="about-section">
        <div className="section-content">
          <h2 className="section-title">お店紹介</h2>
          <div className="about-container">
            <div className="about-image">
              <img src={aboutImage} alt="当店の料理" />
            </div>
            <div className="about-details">
              <h3>ICHIFUZIの魅力</h3>
              <p>最高の料理と空間を提供するバーです。</p>
              <p>厳選された食材と熟練の技術で、お客様に特別なひとときをお届けします。</p>
              <div className="features-grid">
                <div className="feature-item">
                  <span className="feature-icon">✨</span>
                  <h4>厳選された食材</h4>
                  <p>最高品質の食材を使用</p>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">
                    <img src={wineIcon} alt="ワインアイコン" />
                  </span>
                  <h4>豊富なワイン</h4>
                  <p>厳選されたワインセレクション</p>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🎵</span>
                  <h4>心地よい音楽</h4>
                  <p>落ち着いた雰囲気のBGM</p>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🌟</span>
                  <h4>特別な空間</h4>
                  <p>くつろぎのひとときを</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="gallery-section">
        <div className="section-content">
          <h2 className="section-title">ギャラリー</h2>
          <p className="section-subtitle">店内の雰囲気と料理の写真</p>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src={pastaImage} alt="料理1" />
              <div className="gallery-overlay">
                <p>ミートソーススパゲッティ</p>
              </div>
            </div>
            <div className="gallery-item">
              <img src={saladImage} alt="サラダ" />
              <div className="gallery-overlay">
                <p>アボカドと季節野菜のサラダ</p>
              </div>
            </div>
            <div className="gallery-item">
              <img src={cakeImage} alt="デザート" />
              <div className="gallery-overlay">
                <p>デザート</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="access" className="access-section">
        <div className="section-content">
          <h2 className="section-title">アクセス</h2>
          <div className="access-container">
            <div className="access-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.827853398542!2d139.76493611525877!3d35.68124053757899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x277c49ba34ed38!2z5p2x5Lqs6aeF!5e0!3m2!1sja!2sjp!4v1647874587234!5m2!1sja!2sjp"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div className="access-details">
              <h3>店舗情報</h3>
              <ul>
                <li>📍 住所：〒000-0000 東京都○○区○○1-1-1</li>
                <li>📞 電話番号：03-0000-0000</li>
                <li>⏰ 営業時間：18:00 - 24:00</li>
                <li>📅 定休日：毎週月曜日</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="instagram-section">
        <div className="instagram-container">
          <div className="instagram-content">
            <h2 className="section-title">Instagram</h2>
            <a href="https://www.instagram.com/ichifuji__bar?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
               target="_blank" 
               rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagramアイコン" className="instagram-icon" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 