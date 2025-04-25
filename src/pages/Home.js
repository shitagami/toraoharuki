import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
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

      <section className="features">
        <div className="feature-card">
          <Link to="/about">
            <h2>お店紹介</h2>
            <p>当店のコンセプトと魅力をご紹介</p>
          </Link>
        </div>
        <div className="feature-card">
          <Link to="/gallery">
            <h2>ギャラリー</h2>
            <p>店内の雰囲気と料理の写真</p>
          </Link>
        </div>
        <div className="feature-card">
          <Link to="/access">
            <h2>アクセス</h2>
            <p>お店へのアクセス方法</p>
          </Link>
        </div>
      </section>

      <section className="instagram-section">
        <div className="instagram-container">
          <div className="instagram-header">
            <h2 className="instagram-title">Instagram</h2>
          </div>
          <p className="instagram-description">最新の情報や写真をチェック</p>
          <a href="https://www.instagram.com/ichifuji__bar/?igsh=dGcycWRreGthZzlt#" target="_blank" rel="noopener noreferrer" className="instagram-button">
            Instagramでフォロー
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home; 