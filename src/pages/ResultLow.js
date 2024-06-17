import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from 'components/Header';

class ResultLow extends Component {
  render() {

    return (
      <div className="result_details result_low">
        <Header menu={false} />
       <div>
            미모지 동일
          </div>
          <div>
            <div className="txt_group">
              <h3 className="title">
                잠시만요~~
                아쪼구
              </h3>
              <p className="summary">나를 못알아봐?</p>
            </div>
            <div className="btn_bottom_group">
              <Link to="/" className="btn">프로젝트 기여도</Link>
              <Link to="/" className="btn">자기개발 문서관리</Link>
            </div>
          </div>

        
      </div>
    );
  }
}

export default ResultLow;
