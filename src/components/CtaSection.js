import styles from "../style";
import { heroData } from '../data';



const CtaSection = () => {
  const { btnText } = heroData;
  return (
  <section 
  data-aos='fade-down'
  data-aos-delay='300' 
  className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col bg">
      <h2 className={styles.heading2}>まずはお試しください</h2>
      <p className={`${styles.paragraph} text-white max-w-[470px] mt-5`}>
      無料トライアル実施中です。
     {/* <br className="sm:block hidden" /> */}
     お気軽にご相談ください！
      </p>
    </div>

    <div className={`${styles.flexCenter}  sm:ml-10 ml-0 sm:mt-0 mt-10`}>
    <button
              className='btn btn-primary mb-8 xl:mb-0'
              data-aos='fade-up'
              data-aos-delay='800'
            >
              {btnText}
            </button>
    </div>
  </section>
);
  };
export default CtaSection;