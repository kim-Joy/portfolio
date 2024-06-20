import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import "notion/styles/scss/import.scss"
import My from 'notion/assets/my.png';

function Resume() { 


  return(
     <div className="resume">
        <article className="info">
            <h1>Welcome to Joy Portfolio💛</h1>
            <div className="grid">
            <div className="grid-item">
               <img src={My} className="thumbs" alt="김조희" />
            </div>
            <div className="grid-item">
               <h3>"👋 안녕하세요, <span>뒤 늦게 적성을 찾아서</span> 끈임없이 성장해가는 웹퍼블리셔 김조희 입니다"
               </h3>   
               <small>#모든걸 #흡수하는 #나는야 #카멜레온</small>
            </div>
            </div>
         </article>
         <article className="career grid grid-half">
            <section>
               <h2 className="bg-yellow">👩‍🎓 학력 및 경력</h2>
               <ul className="list dot">
                  <li>2012 고등학교 졸업</li>
                  <li>2013.01 ~ 2014.07 이태인 마취통증 의학과</li>
                  <li>2014.07 ~ 2017.12 이한솔 성형외과</li>
                  <li>
                     <p lassName="bg-blue">2018.09 ~ 2019.01 UI/UX 엔지니어링 교육 🧑‍🏫</p>
                     <div className="toggle">
                     <button type="button" className="toggle-summary">한국IT아카데미 국비지원 교육 수강</button>
                     <ul class="toggle-detail list depth">
                        <li>웹 개발 환경 분석</li>
                        <li>UI/UX 전략 수립</li>
                     </ul>
                     </div>
                  </li>
                  <li>
                     <p className="bg-orange">2019.02 ~ 2021.03 알디</p>
                     <ul class="list depth">
                     <li>e-커머스 제작</li>
                     <li>미디어 커머스(자체 플랫폼) 제작 및 운영</li>
                     <li>플랫폼 유지 보수</li>
                     <li>배너 제작 (홈페이지 배너 및 플랫폼 이벤트 배너)</li>
                     </ul>
                  </li>
                  <li>
                     <p className="bg-orange">2021.04 ~ 2024.04 가연결혼정보</p>
                     <ul class="list depth">
                     <li>비고:  법인명 변경으로 <em className="tag">파워세일</em> 소속</li>
                     <li>자사몰 유지보수 및 운영 (홈페이지 & 어드민)</li>
                     <li>광고성 랜딩페이지 제작</li>
                     <li>제휴사 페이지 제작</li>
                     <li>이벤트성 배너 제작</li>
                     </ul>
                  </li>
               </ul>
            </section>
            <section>
               <h2 className="bg-yellow">🪧 자격증</h2>
               <ul className="list dot">
                  <li>2018.09 컴퓨터 활용능력 2급</li>
                  <li>2018.11 GTQ 1급</li>
                  <li>2020.12 웹디자인 기능사</li>
               </ul>
            </section>
         </article>
         <div className="hr full"></div>
         <article className="outputs">
            <section>
            <h2 className="h2">👩‍💻 만들어 봤어요.</h2>
            <ul className="card-list">
               <li>
                  <Link>
                  <div 
                  className="thumb"></div>
                  <div className="info">
                     <strong>MBTI _연애능력치 테스트</strong>
                     <p className="tag-small tag-yellow">회사 프로젝트</p>
                     <p>퍼블 100%</p>
                     <ol className="tag-group">
                        <li className="tag-green">html5</li>
                        <li className="tag-gray">css3</li>
                        <li className="tag-orange">Jquery</li>
                     </ol>
                  </div>
                  </Link>
               </li>
            </ul>
            </section>
         </article>
         
         <article className="technology">
            <h2 className="h2">✋ 다를줄 알아요.</h2>
            <div className="grid grid-half">
               <section>
                  <h3 className="h3 hr">🔨 Tool</h3>
                  <ol className="tag-group flex">
                     <li>Excel</li>
                     <li>Word</li>
                     <li>ppt</li>
                     <li>Adobe XD</li>
                     <li>PhotoShop</li>
                     <li>Illustratorst</li>
                     <li>Zeplin</li>
                     <li>Figma</li>
                     <li>Notion</li>
                     <li>Typed</li>
                  </ol>
               </section>
               <section>
                  <h3 className="h3 hr">⚔️ Skill</h3>
                  <ol className="tag-group flex">
                     <li>Html5</li>
                     <li>CSS3</li>
                     <li>Jquery</li>
                     <li>Javas Script</li>
                     <li>React</li>
                  </ol>
               </section>
            </div>
         </article>

         <article className="character">
            <section>
               <h3 className="h3 hr">본캐</h3>
               <ul className="list dot">
                  <li>
                     <strong>MZ dudvnd</strong>
                  </li>
               </ul>
            </section>
         </article>
     </div>
  )
}


export default Resume;