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
              잠시만요<br />
              조희언니 티어스 닦고 가실게요
            </h3>
            <p className="summary">
              면접관님은 상위 1%인재를 찾고계시군요.
            </p>
            <pre className="pre">
            하지만, 간과한게 있으시군요.
            저의 능력을 다 보여 드린게 아니라는 점. 벌써부터 판단하기에 이른 것 같군요.


            저를 보여드릴 기회는 주세요.. 예?..예?🙇‍
            </pre>
            <div className="btn_bottom_group">
              <Link to="https://kim-joy.github.io/notion/" className="btn fill_pink">프로젝트 기여도</Link>
              <Link to="/" className="btn fill_purple">자기개발 문서관리</Link>
            </div>
          </div>
          
        </section>        
      </div>
    );
  }
}

export default ResultHight;
