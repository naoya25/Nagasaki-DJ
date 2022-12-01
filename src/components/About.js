import React from 'react'
import BasicTable from './Table'
import img1 from "../images/image1.jpg"
import img2 from "../images/image2.jpg"
import img3 from "../images/image3.jpg"
import img4 from "../images/image4.jpg"
import img5 from "../images/image5.jpg"
import img6 from "../images/image6.jpg"

const About = () => {
  return (
    <>
      <div className="about-all-contents">
        <div className="about-title">
          長崎大学DJサークルとは
        </div>
        <div className="about-content">
          DJの楽しさを広めたいという思いで活動しています。<br />
          本団体は、学生生活の充実ならびに学生間の親睦をはかり、DJや音楽を通じて自己を錬磨し、見識を広めることを目的としています。<br />
          DJは世間に知られるようになってまだ日が浅いです。
          そこで学生の趣味の１つとしてDJとの繋がりを持ってもらえるように情報発信やイベントづくりに取り組んでいます。<br />
          将来的にはDJが趣味の人を増やし、
          気軽にDJができる環境を作っていきたいと思っています！
        </div>
        <div className="about-title">活動</div>
        <div className="about-content">
          <BasicTable rows={
            [
              {name:'学校内外でのイベント開催', period:'「主なイベント」に詳細'},
              {name:'全学年合同練習会', period:'3ヶ月に1回程度'},
              {name:'部室での練習会', period:'自主練等'},
              {name:'部室パーティー', period:'偶数月の第一金曜日'},
            ]
          } />
        </div>
        <div className="about-title">主なイベント</div>
        <div className="about-content">
          <BasicTable rows={
            [
              {name:'新歓DJパーティー', period:'6月'},
              {name:'ビーチDJパーティー', period:'7月'},
              {name:'夏休みイベント', period:'8月'},
              {name:'ハロウィンDJパーティー', period:'10月'},
              {name:'クリスマスDJパーティー', period:'12月'},
              {name:'追いコンDJパーティー', period:'2月'},
            ]
            // MUI Timeline使う
          } />
        </div>
        <div className="about-title">活動実績</div>
        <div className="about-content records">
          <div className="about-record">
            <div className="record-image">
              <img src={img1} alt="No Image" />
            </div>
            <div className="record-content">
              2022年 11月<br />
              部員が長崎市主催の「
              <a href="https://nagasakisignal.localinfo.jp/pages/5759472/page_202201291915" target='_blank'>アーツ＆スナック長崎運動</a>
              」に出演
            </div>
          </div>
          <div className="about-record">
            <div className="record-image">
              <img src={img2} alt="No Image" />
            </div>
            <div className="record-content">
              2022年 8月<br />
              部員がpaypayドーム「<a href="https://music-circus.jp/" target='_blank'>Music circus</a>」にDJ出演
            </div>
          </div>
          <div className="about-record">
            <div className="record-image">
              <img src={img3} alt="No Image" />
            </div>
            <div className="record-content">
              2022年 4月<br />
              学生連合主催新歓イベントにてDJゲスト出演
            </div>
          </div>
          <div className="about-record">
            <div className="record-image">
              <img src={img4} alt="No Image" />
            </div>
            <div className="record-content">
              2021年 6月<br />
              長崎新聞に活動を掲載
            </div>
          </div>
          <div className="about-record">
            <div className="record-image">
              <img src={img5} alt="No Image" />
            </div>
            <div className="record-content">
              2020年 6月<br />
              長洞新聞に活動を掲載
            </div>
          </div>
        </div>
        <div className="about-title">その他サークル概要</div>
        <div className="about-content">
          <BasicTable rows={
            [
              {name:'設立年', period:'2019年（令和 元年）'},
              {name:'部員数', period:'27名'},
              {name:'活動場所', period:'集会室、研修室、学生プラザ等'},
              {name:'部費', period:'500円/月'},
              {name:'部費回収', period:'半年に1回(4月、10月)'},
            ]
          } />
        </div>
      </div>
    </>
  )
}

export default About
