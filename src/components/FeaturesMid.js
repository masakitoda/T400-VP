import React from 'react';
import download from '../assets/download.jpeg';
import styles, { layout } from "../style";

const FeaturesMid = () => (
    <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      <span className="text-black'">使いやすく</span> <br className="sm:block hidden" /> <span className="text-black">スピーディー</span>
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-black`}>
      クラウドアプリケーションなのでインストール不要。文章以外にPDF・Word・Excel・PowerPoint等の形式に対応。ドラッグ＆ドロップでファイルを丸ごと、レイアウトそのままで翻訳。WebサイトもURLを入力するだけでレイアウトそのままに翻訳。翻訳後の画面でリンクをクリックするとリンク先も自動翻訳。
      </p>
    </div>
    <div className={layout.sectionImg}>
      <img
      data-aos='fade-left'
      data-aos-delay='600' 
       src={download} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default FeaturesMid