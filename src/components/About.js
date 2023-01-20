import React from 'react'

//import about data
import { aboutData } from '../data';
import { features } from '../data';
import styles, { layout } from "../style";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-white text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const About = () => {
    //About data Content
    const{image,title} = aboutData;
  return (
    <div id="about" className='pb-20px'>
    <section className='pt-20px my-[30px] xl:mt-[100px]'
        data-aos='fade-up'
        data-aos-offset='350'
    >
        <div className='container mx-auto'>
            <div className='bg-blue-900 rounded-[60px] min-h-[560px] px-12 p-12 flex flex-col text-center xl:flex-row xl:items-center 
            xl:text-left xl:gap-x-[60px] xl:pb-0 '>
                {/* image section*/}
                <div className='flex-1' data-aos='zoom-in-left'>
                    <img src={image} alt="" />
                </div>
                {/* text */}
                <div className='flex-1 xl:pr-12'>
                    <h2 className='h1 mb-10 text-white'
                        data-aos='fade-up'
                        data-aos-delay='300'
                    >
                        {title}
                    </h2>
                  <div 
                  data-aos='fade-up'
                  data-aos-delay='500'
                  className={`${layout.sectionImg} flex-col`}>
                    {features.map((feature, index) => (
                      <FeatureCard key={feature.id} {...feature} index={index} />
                    ))}
                  </div>
                </div>
            </div>
        </div>
       
    </section>
    </div>
  );
};

export default About