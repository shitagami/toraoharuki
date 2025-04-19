import React from 'react';
import './Menu.css';

const Menu = () => {
  return (
    <div className="menu-page">
      <section className="menu-hero">
        <h1>メニュー</h1>
      </section>

      <section className="menu-content">
        <div className="container">
          <div className="menu-section">
            <h2>ドリンク</h2>
            <div className="menu-items">
              <div className="menu-item">
                <h3>ハウスワイン</h3>
                <p>グラス 1,000円 / ボトル 5,000円</p>
              </div>
              <div className="menu-item">
                <h3>カクテル</h3>
                <p>1,200円</p>
              </div>
              <div className="menu-item">
                <h3>ビール</h3>
                <p>800円</p>
              </div>
              <div className="menu-item">
                <h3>ソフトドリンク</h3>
                <p>600円</p>
              </div>
            </div>
          </div>

          <div className="menu-section">
            <h2>フード</h2>
            <div className="menu-items">
              <div className="menu-item">
                <h3>前菜盛り合わせ</h3>
                <p>2,500円</p>
              </div>
              <div className="menu-item">
                <h3>メイン料理</h3>
                <p>3,800円</p>
              </div>
              <div className="menu-item">
                <h3>デザート</h3>
                <p>1,200円</p>
              </div>
            </div>
          </div>

          <div className="menu-section">
            <h2>コース</h2>
            <div className="menu-items">
              <div className="menu-item">
                <h3>ランチコース</h3>
                <p>3,800円</p>
                <p className="description">前菜、メイン、デザート、ドリンク付き</p>
              </div>
              <div className="menu-item">
                <h3>ディナーコース</h3>
                <p>6,800円</p>
                <p className="description">前菜、スープ、メイン、デザート、ドリンク付き</p>
              </div>
            </div>
          </div>

          <div className="menu-section">
            <h2>その他</h2>
            <div className="menu-items">
              <div className="menu-item">
                <h3>チャージ料金</h3>
                <p>500円（税込）</p>
              </div>
              <div className="menu-item">
                <h3>サービス料</h3>
                <p>10%（税込）</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu; 