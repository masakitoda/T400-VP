import styles from "../style";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Result from "./Result";
import Policy from "./Policy";
import {useState}  from 'react';



// npm i @emailjs/browser

const Contact = () => {
   const form = useRef();
   const [agree, setAgree] = useState(false);
   const checkboxHandler = () => {
       // if agree === true, it will be set to false
       // if agree === false, it will be set to true
       setAgree(!agree);
       // Don't miss the exclamation mark
     }
   
     // When the button is clicked
     const btnHandler = () => {
       // alert('記入お願いします。');
     };
     //message alllert
     const[result,showResult] = useState(false);
     
   const sendEmail = (e) => {
     e.preventDefault();
 
     emailjs
       .sendForm(
         "service_p9gsamf",
         "template_kiywmvi",
         form.current,
         "jXNzJ0pMt00xqsUwg"
         )
         .then(
           (result) => {
             console.log(result.text);
           },
           (error) => {
             console.log(error.text);
           }
         );
         e.target.reset();
         showResult(true);
     };
     setTimeout(() =>{
       showResult(false)
     },3000);
   
 
     return (
       <section id="contact" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
     <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
     
         <h2 className={styles.heading2}>
         <span className="text-black">使いやすく</span> <br className="sm:block hidden" /> <span className="text-black">スピーディー</span>
         </h2>
         <p className={`${styles.paragraph} max-w-[470px] mt-5 text-black`}>
         クラウドアプリケーションなのでインストール不要。文章以外にPDF・Word・Excel・PowerPoint等の形式に対応。ドラッグ＆ドロップでファイルを丸ごと、レイアウトそのままで翻訳。WebサイトもURLを入力するだけでレイアウトそのままに翻訳。翻訳後の画面でリンクをクリックするとリンク先も自動翻訳。
         </p><br className="sm:block flex" />{" "}
     <div>
       <Policy />
     </div>
         </div>
       <div  className={`flex-1 flex ${styles.flexRight} md:my-0 my-10 relative`}>
       {/* <div className="relative flex flex-col justify-right min-h-screen overflow-hidden"> */}
         <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
           <h1 className="text-3xl font-semibold text-center text-indigo-700 uppercase decoration-wavy">
             問い合わせ
           </h1>
           <form ref={form} onSubmit={sendEmail} className="mt-6">
             <div className="mb-2">
               <label>
                 <span className="text-gray-700">氏名</span>
                 <input
                   type="text"
                   name="user_name"
                   className="
   
               w-full
               block px-16 py-2 mt-2
               border-gray-300
               rounded-md
               shadow-sm
               focus:border-indigo-300
               focus:ring
               focus:ring-indigo-200
               focus:ring-opacity-50
             "
                   placeholder="渋谷　太郎"
                   required
                 />
               </label>
             </div>
             <div className="mb-2">
               <label>
                 <span className="text-gray-700">フリガナ</span>
                 <input
                   type="text"
                   name="kana_name"
                   className="
   
               w-full
               block px-16 py-2 mt-2
               border-gray-300
               rounded-md
               shadow-sm
               focus:border-indigo-300
               focus:ring
               focus:ring-indigo-200
               focus:ring-opacity-50
             "
                   placeholder="シブヤ　タロウ"
                   required
                 />
               </label>
             </div>
             <div className="mb-2">
               <label>
                 <span className="text-gray-700">会社名</span>
                 <input
                   type="text"
                   name="company_name"
                   className="
   
               w-full
               block px-16 py-2 mt-2
               border-gray-300
               rounded-md
               shadow-sm
               focus:border-indigo-300
               focus:ring
               focus:ring-indigo-200
               focus:ring-opacity-50
             "
                   placeholder="株式会社○○○"
                   required
                 />
               </label>
             </div>
             <div className="mb-2">
               <label>
                 <span className="text-gray-700">連絡先</span>
                 <input
                   type="text"
                   name="contact"
                   className="
   
               w-full
               block px-16 py-2 mt-2
               border-gray-300
               rounded-md
               shadow-sm
               focus:border-indigo-300
               focus:ring
               focus:ring-indigo-200
               focus:ring-opacity-50
             "
                   placeholder=""
                   required
                 />
               </label>
             </div>
             <div className="mb-2">
               <label>
                 <span className="text-gray-700">Email address</span>
                 <input
                   name="user_email"
                   type="email"
                   className="
               block
               w-full
               mt-2 px-16 py-2
               border-gray-300
               rounded-md
               shadow-sm
               focus:border-indigo-300
               focus:ring
               focus:ring-indigo-200
               focus:ring-opacity-50
             "
                   placeholder="s.tarou@aicompany.jp"
                   required
                 />
               </label>
             </div>
             <div className="mb-2">
               <label>
                 <span class="text-gray-700">Message</span>
                 <textarea
                   name="message"
                   className="
               block
               w-full
               mt-2 px-16 py-8
               border-gray-300
               rounded-md
               shadow-sm
               focus:border-indigo-300
               focus:ring
               focus:ring-indigo-200
               focus:ring-opacity-50
             "
                   rows="5"
                 ></textarea>
               </label>
             </div>
             <input type="checkbox" id="agree" onChange={checkboxHandler} />
         <label htmlFor="agree"> プライバシーポリシーに <b>同意します。</b></label>
         <br className="sm:block flex" />{" "}
         <br className="sm:block flex" />{" "}
             <div class="mb-6">
               <button
                 type="submit"
                 value="Send"
                 disabled={!agree}
                 className="
               h-10
               px-5
               text-indigo-100
               bg-indigo-700
               rounded-lg
               transition-colors
               duration-150
               focus:shadow-outline
               hover:bg-indigo-800
             "
             onClick={btnHandler}
               >
                 Send
               </button>
             </div><br className="sm:block flex" />{" "}
             <div>
               {result ? <Result/> :null} 
             </div>
           </form>
         {/* </div> */}
       </div>
       </div>
      
       </section>
     );
 };
 
 
export default Contact;