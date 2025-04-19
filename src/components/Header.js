import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
        ICHIFUZI
        </Link>
        <nav className="nav">
          <ul>
            <li><Link to="/">ホーム</Link></li>
            <li><Link to="/about">お店紹介</Link></li>
            <li><Link to="/access">アクセス</Link></li>
            <li><Link to="/gallery">ギャラリー</Link></li>
            <li><Link to="/menu">メニュー</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 