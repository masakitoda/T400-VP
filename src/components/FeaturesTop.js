import React from 'react';
import ai from '../assets/ai.jpg';
import styles, { layout } from "../style";

const FeaturesTop = () => (
  <section id="featuretop" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
       data-aos='fade-right'
       data-aos-delay='600' 
       src={ai} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
     <span className="text-black">超高精度の</span><br className="sm:block hidden" /><span className="text-black">翻訳</span>
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5  text-black`}>
      100以上の言語・2000以上の専門分野に対応。ニューラルネットワークを活用したAI翻訳でプロ翻訳者に匹敵する精度を実現。分野を選択・検索することで一般的な翻訳ソフトには翻訳できない専門用語にも対応可能。
      </p>

    
    </div>
  </section>
);

export default FeaturesTop;