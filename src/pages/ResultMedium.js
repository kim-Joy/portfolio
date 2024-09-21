import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from 'components/Header';

import Memoji_result from 'assets/images/memoji/result_medium.png';

class ResultHight extends Component {
  render() {

    return (
      <div className="result ">
        <Header menu={false} />
        <section className="pos_center">
          <div className="details_memoji">
            <img src={Memoji_result} className="memoji" alt="미모지" />
          </div>
          <div className="details_txt_group">     
          {/* <p className="summary">
            포폴을 보니 채용하고 싶은 마음이 생겼다.
            </p>        */}
            <h3 className="title">
            더 알아가보고 싶은<br />
            지원자로 선택하셨습니다.
            </h3>

            <pre className="pre">
              포트폴리오를 보니 면접을 봐야겠다는 생각이 들었다.<br />
              이전에 작업한 사이트들이 좀 궁금하다.<br />
              

              카멜레온 같은 흡입력으로 기획부터 uiux 디자인, 퍼블리싱까지 작업했던 산출물과 자기개발을 통해 진행했던 토이 프로젝트들을 공개합니다.
            </pre>
          </div>
          <div className="details_btn_group">
            <div className="btn_bottom_group">
              <Link to="https://kim-joy.github.io/notefolio/" className="btn fill_pink">프로젝트 기여도</Link>
              <Link to="/" className="btn fill_purple">자기개발 문서관리</Link>
            </div>
          </div>
        </section>        
      </div>
    );
  }
}

export default ResultHight;
