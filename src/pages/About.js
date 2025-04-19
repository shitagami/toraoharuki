import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <h1>お店紹介</h1>
      </section>

      <section className="concept">
        <div className="container">
          <h2>コンセプト</h2>
          <p>
            当店は、最高級の食材と伝統的な調理法を組み合わせ、
            現代的なアレンジを加えた料理を提供しています。
            落ち着いた雰囲気の中で、特別なひとときをお過ごしください。
          </p>
        </div>
      </section>

      <section className="interior">
        <div className="container">
          <h2>店内の様子</h2>
          <div className="gallery">
            <div className="gallery-item">
              <img src="/images/interior1.jpg" alt="店内写真1" />
            </div>
            <div className="gallery-item">
              <img src="/images/interior2.jpg" alt="店内写真2" />
            </div>
            <div className="gallery-item">
              <img src="/images/interior3.jpg" alt="店内写真3" />
            </div>
          </div>
        </div>
      </section>

      <section className="staff">
        <div className="container">
          <h2>スタッフ紹介</h2>
          <div className="staff-grid">
            <div className="staff-member">
              <img src="/images/chef.jpg" alt="シェフ" />
              <h3>シェフ 山田太郎</h3>
              <p>フレンチの名店で10年の経験を持つシェフ</p>
            </div>
            <div className="staff-member">
              <img src="/images/sommelier.jpg" alt="ソムリエ" />
              <h3>ソムリエ 佐藤花子</h3>
              <p>ワインの知識が豊富なソムリエ</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 