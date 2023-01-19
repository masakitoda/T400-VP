

//import images
import Ai2 from '../src/assets/ai.jpg';
import Ai from '../src/assets/VPAI.png';
import send from '../src/assets/Send.svg';
import shield from '../src/assets/Shield.svg';
import star from '../src/assets/Star.svg';


export const navigationData = [
    {
        name: 'T-400とは',
        href: '#',
        id:"#about",
      },
      {
        name: '機能',
        href: '#',
        id:"#feature",
      },
      {
        name: '導入実績',
        href: '#',
        id:"#testi",
      },
      {
        name: '資料請求',
        href: '#',
        id:"#contact",
      },
]


export const heroData = {
    title: ` AI自動翻訳 T-4OO`,
    subtitle:
      '約2,000の翻訳エンジンで専門分野を正確かつスピーディーに翻訳！',
    btnText: '資料請求こちら',
    image: Ai,
  };
  
  export const aboutData = {
    image: Ai2,
    title: 'T-4OOとは',
    subtitle:
      '100以上の言語・2000以上の専門分野に対応。ニューラルネットワークを活用したAI翻訳でプロ翻訳者に匹敵する精度を実現。分野を選択・検索することで一般的な翻訳ソフトには翻訳できない専門用語にも対応可能。',
  };

export const stats = [{
    id: "stats-1",
    title: "専門2000分野・",
    value: "100言語をカバー",
},
{
    id: "stats-2",
    title: "スキャン",
    value: "画像PDFも丸ごと翻訳",
},
{
    id: "stats-3",
    title: "国内サーバーによる",
    value: "最高水準のセキュリティ",
},
];

export const features = [{
    id: "feature-1",
    icon: star,
    title: "超高精度の自動翻訳",
    content: "100以上の言語・2000以上の専門分野に対応。ニューラルネットワークを活用したAI翻訳でプロ翻訳者に匹敵する精度を実現。分野を選択・検索することで一般的な翻訳ソフトには翻訳できない専門用語にも対応可能。",
},
{
    id: "feature-2",
    icon: shield,
    title: "安全安心のセキュリティ",
    content: "翻訳に際しSSLを用いた暗号化通信を使用。さらにサーバーは全てISMS認証取得の国内施設にて管理。サーバーに保存された翻訳データは2週間経過で自動削除されます。(任意のタイミングでの手動削除も可能です) ",
},
{
    id: "feature-3",
    icon: send,
    title: "使いやすくスピーディー",
    content: "クラウドアプリケーションなのでインストール不要。文章以外にPDF・Word・Excel・PowerPoint等の形式に対応。ドラッグ＆ドロップでファイルを丸ごと、レイアウトそのままで翻訳。WebサイトもURLを入力するだけでレイアウトそのままに翻訳。翻訳後の画面でリンクをクリックするとリンク先も自動翻訳。",
},
];
  
