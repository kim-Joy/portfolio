import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from 'components/Header';

import Memoji_result from 'assets/images/memoji/result_low.png';

class ResultHight extends Component {
  render() {

    return (
      <div className="result">
        <Header menu={false} />
        <section className="pos_center">
          <div className="details_memoji">
            <img src={Memoji_result} className="memoji" alt="미모지" />
          </div>
          <div className="details_txt_group">
            <h3 className="title">
            404<br />
            Not Found 💣
            </h3>
            <p className="summary">
            Oops. this page doesn't exist<br />
            The balance test again please.🙏
            </p>

          <pre className="pre">카멜레온 같은 인재라고 말씀드렸던가요?

            
            아직 저의 능력을 다 보여드린게 아닌데, 이렇게 가버리시면 섭섭합니다. 
            면접관님의 흥미를 끌기 위해 좀 더 준비해보았습니다.
          </pre>
          </div>
          <div className="details_btn_group">
            <div className="btn_bottom_group">
              <Link to="https://kim-joy.github.io/portfolio/" className="btn fill_pink">포트폴리오 기여도</Link>
              <Link to="https://kim-joy.github.io/notefolio/" className="btn fill_purple">프로젝트 산출물</Link>
            </div>
          </div>
        </section>        
      </div>
    );
  }
}

export default ResultHight;
