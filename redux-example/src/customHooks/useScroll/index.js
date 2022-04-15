import React from 'react'
import { useScroll } from './useScroll'
import './index.css'

export default function Index() {
  const [scrollOptions, domRef] = useScroll()
  /* scrollOptions 保存控制透明度 ，top值 ，吸顶开关等变量 */
  const { opacity, top, suctionTop } = scrollOptions
  return <div style={{ position: 'static', height: '2000px' }} >
    {/* <div className='white' /> */}
    <div id='box' style={{ opacity, transform: `translateY(${top}px)` }} ref={domRef} >
      <div
        className='swiper'
      >
        <div className='SwiperItem' >
          <div className='imgae' />
        </div>
      </div>
    </div>
    <div className={suctionTop ? 'box_card suctionTop' : 'box_card'}>
      <div
        style={{
          background: 'red',
          boxShadow: '0px 15px 10px -16px #F02F0F'
        }}
        className='reultCard'
      >
      </div>
    </div>
  </div>
}
