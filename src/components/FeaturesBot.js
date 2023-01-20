import React from 'react';
import styles, { layout } from "../style";
import security from '../assets/security.jpg';


const FeaturesBot = () => (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
        data-aos='fade-right'
        data-aos-delay='600' 
         src={security} alt="security" className="w-[100%] h-[100%] relative z-[5]" />
  
        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradient end */}
      </div>
  
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
       <span className="text-black">安全安心の</span><br className="sm:block hidden" /><span className="text-black">セキュリティ</span>
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5  text-black`}>
        翻訳に際しSSLを用いた暗号化通信を使用。さらにサーバーは全てISMS認証取得の国内施設にて管理。サーバーに保存された翻訳データは2週間経過で自動削除されます。(任意のタイミングでの手動削除も可能です)
        </p>
      </div>
    </section>
  );

export default FeaturesBot