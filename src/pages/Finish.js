import 'styles/finish.css';

import Memoji_heart from 'assets/images/memoji/heart.svg';

const { Component } = require("react");




class Finish extends Component {
  
  render() {
    return (
      <article className="finish" id="finish"> 
       <div className="pos_center">
        <ul className="bubble_group">
            <li>
              <p className="bubble bubble_tail">포트폴리오를 끝까지<br />봐주셔서 감사합니다.</p>
            </li>
            <li>
              <p className="bubble bubble_tail">우리 곧 만나요.</p>
            </li>
            <li>
              <p className="bubble bubble_tail">만날 수 있는 걸까요?</p>
            </li>
            <li>
              <p className="bubble bubble_tail">못만난다면 그것 또한 운명</p>
            </li>
          </ul>
          <img src={Memoji_heart} className="memoji" alt="하트하는 미모지" />
          <ul className="bubble_group">
            <li>
              <p className="bubble bubble_tail">만날 수 있는 걸까요?</p>
            </li>
            <li>
              <p className="bubble bubble_tail">만날 수 있는 걸까요?</p>
            </li>
            <li>
              <p className="bubble bubble_tail">만날 수 있는 걸까요?</p>
            </li>
            <li>
              <p className="bubble bubble_tail">만날 수 있는 걸까요?</p>
            </li>
          </ul>
       </div>
      </article>
    );
  }
}

export default Finish;
