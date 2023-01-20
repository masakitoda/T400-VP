import React,{useState} from 'react';
import styles, { layout } from "../style";

const Policy = () => {
  const [show,setShow] = useState(false);
  return (
  <section className={layout.section}>
  <div className={layout.sectionInfo}>
        <button 
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
        onClick={() => setShow(!show)}>プライバシーポリシー</button><br className="sm:block hidden" />
        {
            show? <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
            <span className="text-black flex-1 font-poppins font-semibold ss:text-[28px] text-[28px] xs:text-[28px] ss:leading-[28px] leading-[28px]">個人情報の取り扱いについて</span><br className="sm:block hidden" />
            <p className="text-black flex-1 font-poppins font-semibold ss:text-[15px] text-[15px] xs:text-[15.89px] ss:leading-[15.8px] leading-[15px]">〔事業者の氏名または名称〕</p>
            <p className={`${styles.paragraph} max-w-[470px] mt-5 text-black`}>株式会社バリュープランニング</p>
            <p className={`${styles.paragraph} max-w-[470px] mt-5 text-black`}>〔個人情報保護管理者〕</p><br className="sm:block hidden" />
            </h2>
            <h4 className="font-poppins font-bold text-[18px] leading-[23.4px] mb-1">取締役副社長　舘岡 正行</h4><br className="sm:block hidden" />{" "}
            <p className={`${styles.paragraph} max-w-[470px] mt-5 text-black`}>(連絡先は、下記〔個人情報苦情及び相談窓口〕)</p><br className="sm:block hidden" />
            <h4 className="font-poppins font-bold text-[18px] leading-[23.4px] mb-1">〔個人情報の利用目的〕</h4>
            <p className={`${styles.paragraph} max-w-[470px] mt-5 text-black`}>  個人情報の利用目的は、サービスに関するご意見・お問い合わせの正確な把握、それらへ
            の回答のため利用します。利用目的を超えて利用することはありません。</p><br className="sm:block hidden" />
            <h4 className="font-poppins font-bold text-[18px] leading-[23.4px] mb-1">〔個人情報の第三者提供について〕</h4>  
            <p className={`${styles.paragraph} max-w-[470px] mt-5 text-black`}>本人の同意がある場合または法令に基づく場合を除き、取得した個人情報を第三者に提供
            することはありません。</p><br className="sm:block hidden" />
            <h4 className="font-poppins font-bold text-[18px] leading-[23.4px] mb-1">〔個人情報の取扱いの委託について〕</h4>
            <p className={`${styles.paragraph} max-w-[470px] mt-5 text-black`}>取得した個人情報の取扱いの全部または、一部を委託する場合があります。委託先につい
            ては、個人情報取扱いに関する契約を締結するなど、適切な管理を行います。</p><br className="sm:block hidden" />
            <h4 className="font-poppins font-bold text-[18px] leading-[23.4px] mb-1">〔開示対象個人情報の開示等および問合窓口について〕</h4>
            <p className={`${styles.paragraph} max-w-[470px] mt-5 text-black`}>当社では、当個人情報に関する利用目的の通知、開示、内容の訂正・追加または削除、利
            用の停止・消去および第三者への提供の停止（「開示等」といいます。）の求めを受け付
            けております。その手続きについては、個人情報苦情及びご相談窓口へご連絡下さい。た
            だし、法令等に基づく場合は、開示等できない場合があります。あらかじめご了承ください。</p><br className="sm:block hidden" />
            <h4 className="font-poppins font-bold text-[18px] leading-[23.4px] mb-1">〔個人情報を入力するにあたっての注意事項〕</h4>
            <p className={`${styles.paragraph} max-w-[470px] mt-5 text-black`}>必須項目にご入力いただけない場合には、上記〔個人情報の利用目的〕に記すサービスが
          行えない場合があります。</p><br className="sm:block hidden" />
          <h4 className="font-poppins font-bold text-[18px] leading-[23.4px] mb-1">〔本人が容易に認識できない方法による個人情報の取得〕</h4>
          <p className={`${styles.paragraph} max-w-[470px] mt-5 text-black`}>当社では、配信メールの開封率特定やマーケティング・オートメーションツールの利用の
          ため、webビーコンを使用しております。また、お客様が快適に当社ホームページをご利
            用できるように、Cookieを用いたトラッキング機能を使用しております。</p><br className="sm:block hidden" />
            <h4 className="font-poppins font-bold text-[18px] leading-[23.4px] mb-1">〔個人情報の安全管理措置について〕</h4>
            <p className={`${styles.paragraph} max-w-[470px] mt-5 text-black`}>取得した個人情報については、漏洩、減失またはき損の防止と是正、その他個人情報の安
          全管理のために必要かつ適切な措置を講じます。このサイトは、SSL（Secure Socket Layer）による暗号化措置を講じています。</p><br className="sm:block hidden" />
          <h4 className="font-poppins font-bold text-[18px] leading-[23.4px] mb-1">〔個人情報苦情及び相談窓口〕</h4><br className="sm:block hidden" />
          <h4 className="font-poppins font-bold text-[18px] leading-[23.4px] mb-1"> 株式会社バリュープランニング</h4>
          <p className={`${styles.paragraph} max-w-[470px] mt-5 text-black`}>  〒150-0001 東京都渋谷区神宮前6-17-15 落合原宿ビル 3F</p>
          <p className={`${styles.paragraph} max-w-[470px] mt-5 text-black`}> FAX：03-6427-3211</p>
            </div>
            :null
        }
        
    </div>
    </section>
  );
}

export default Policy;