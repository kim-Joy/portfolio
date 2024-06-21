import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import "notion/styles/scss/import.scss"
import Mockup_laptop from 'notion/assets/outputs/mockup_laptop.png';
import Mockup_laptop_detail from 'notion/assets/outputs/mockup_laptop_detail.png';
import Mockup_phone from 'notion/assets/outputs/mockup_phone.png';

function Detail() { 

  return(
     <div className="resume detail">
        <section>
          <h3>타이틀</h3>
          <dl>
            <dt>
              <Link>URL
              </Link>
            </dt>
          </dl>
          <dl>
            <dt>
              기여도
            </dt>
          </dl>
          <dl>
            <dt>
              사용언어
            </dt>
          </dl>
          <dl>
            <dt>
              프로젝트 구분
            </dt>
          </dl>
          <dl>
            <dt>
              투입기간
            </dt>
          </dl>
        </section>
        <section>
          <div className="full">
            <div className="mockup">
             <img src={Mockup_laptop} className="laptop" alt="피씨 목업" />
             <img src={Mockup_laptop_detail} className="detail detail-laptop" alt="산출물 디테일 페이지" />
            </div>
          </div>
          <div className="half">
            <div className="mockup">
              <img src={Mockup_phone} className="phone" alt="모바일 목업" />
              <img src={Mockup_laptop_detail} className="detail detail-phone" alt="산출물 디테일 페이지" />
            </div>
          </div>
        </section>
     </div>
  )
}


export default Detail;