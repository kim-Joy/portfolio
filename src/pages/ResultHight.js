import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from 'components/Header';

class ResultHight extends Component {
  render() {

    return (
      <div className="result result_height">
        <Header menu={false} />
        <section className="result_details">
          <div className="">
              미모지 동일
          </div>
          <div className="txt_group">
            <h3 className="title">
              잠시만요~~
              아쪼구
            </h3>
            <p className="summary">나를 못알아봐?</p>
            <div className="btn_bottom_group">
              <Link to="/Resume" className="btn fill_pink">프로젝트 기여도</Link>
              <Link to="/" className="btn fill_purple">자기개발 문서관리</Link>
            </div>
          </div>
          
        </section>        
      </div>
    );
  }
}

export default ResultHight;
