import { Component } from "react";
import "styles/confirm.css"


class Confrim extends Component {
  render() {
    return (
      <div className="confrim notification">
        <div className="confrim_cont">
          <div className="body">
            <h2>밸런스 게임</h2>
            <p>지원자에 대한 채용게임을 시작합니다.</p>
          </div>
        </div>
        <div className="dim"></div>
      </div>
    );
  }
}

export default Confrim;

/*

페이지 진입시 딱 한번 실행 하는 이벤트로 진동 울려랴앟.ㅁ 
원페이지인데 음냐냐냐ㅑ냐냐냐냐냔

*/
