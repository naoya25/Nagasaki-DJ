import React, { useRef } from 'react'
import img4 from "../images/image4.jpg"
import img6 from "../images/image6.jpg"
import { Image, ScrollControls, Scroll } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'

const Member = () => {
  return (
    <>
      <div id="member-all">
        <Canvas style={{width: '100%', height: '100%'}}>
          <ScrollControls pages={3}>
            <Scroll>
              <Image url={img4} scale={[2,2,2]} position={[2,0,1]} />
              <Image url={img6} scale={[2,2,2]} position={[-2,0,1]} />
            </Scroll>
            <Scroll html>
              <h1>VISION</h1>
              <p>
                DJの楽しさを広めたいという思いで活動しています。
                本団体は、学生生活の充実ならびに学生間の親睦をはかり、DJや音楽を通じて自己を錬磨し、見識を広めることを目的としています。
                DJは世間に知られるようになってまだ日が浅いです。 そこで学生の趣味の１つとしてDJとの繋がりを持ってもらえるように情報発信やイベントづくりに取り組んでいます。
                将来的にはDJが趣味の人を増やし、 気軽にDJができる環境を作っていきたいと思っています！
              </p>
              <h1>MEMBER</h1>
              <div>
                部長 内野光佳莉(DJ No-va) <br />
                部長のひかりです！普段はDJ No-vaとして、ジャンル問わず様々なイベントに出演しています！また、プログラミングスクールでのメンターや、ダンスもしています！
                DJサークルは、音楽好きの方、DJに興味がある方、誰でも入部大大大歓迎です！是非、SNSのDMに気軽に連絡いただけると嬉しいです❤︎ <br />
                <a href="https://instagram.com/dj__no_va?igshid=YmMyMTA2M2Y=" target='_blank'>DJインスタ</a><br />
                <a href="https://instagram.com/hikarinrin_____?igshid=YmMyMTA2M2Y=" target='_blank'>個人インスタ</a><br />
              </div>
            </Scroll>
          </ScrollControls>
        </Canvas>
      </div>
    </>
  )
}

export default Member
