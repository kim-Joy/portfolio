import Header from "components/Header"
import Image from 'assets/images/weclome_sign.svg';

import "styles/intro.css";

const { Component } = require("react");
const weclome_sign = <img src={Image} className="weclome_sign" alt="Weclome to joy portfolio" />

class Intro extends Component {
  render() {
    return (
      <div className="intro">
        <Header />
        <div className="">
          명찰
        </div>
        <div className="txt_group">
          <h3>안녕<i className="icon_hand"></i>나는 5년차 웹퍼블리셔야</h3>
          <p>기획, UIUX 디자인, 퍼블리싱까지 여러분야를 카멜레온처럼 습득이 빠른 친구지. 자기개발도 틈틈히 하는 열정 인재라고 할까?</p>
        </div>
        <div className="effect_lt">
          <span className="figure_start purple"></span>
          <span className="figure_start blue"></span>
        </div>
        <div className="absolute_bg" style={{right : '50px', bottom: "0px"}}>
          <div className="weclome_group">{weclome_sign}</div>
        </div>

        <span className="figure_start_line"></span>
        <span className="figure_oval"></span>
        
        <div className="gradation_bg">
          <span className="gradation_line"></span>
        </div>
      </div>
    );
  }
}

export default Intro;
