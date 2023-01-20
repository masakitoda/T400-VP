import { stats } from '../data';
import styles from "../style";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Stats = () => {
  useEffect(() =>{
    Aos.init({ duration:2000});
  },[]);
  return(
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat) => (
      <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`} >
        <h2 className="mt-12 font-poppins font-semibold lg:text-[32px] xs:text-[14px] text-[14px] xs:leading-[14px] leading-[14.16px] text-white">
          {stat.value}
        </h2>
        {/* <p className="font-poppins font-normal xs:text-[15.45px] text-[12.45px] xs:leading-[15.58px] leading-[15.58px] text-gradient uppercase ml-3">
          {stat.title}
        </p> */}
      </div>
    ))}
  </section>
  );
};

export default Stats;