import { Component } from "react";
import 'styles/myself.css';

import Memoji_smile from 'assets/images/memoji/smile.svg';


class Myself extends Component {
  
  render() {


    return (
      <article className="myself" id="myself">
        <div className="pos_center">
          <ul className="bubble_group">
            <li className="bubble">
              나를 자랑하자면,<br />
              예측하지 못한 상황에 침착하게<br />
              의논하며 해결법을 찾아내<br />
              모두들 든든하게 의지하더라고
            </li>
            <li className="bubble">
              남들이 보는 회사에서 나의 모습은
            </li>
            <li className="bubble blur">
              <span> 조록수</span>
            </li>
            <li className="bubble bubble_tail">
              내가 더 궁금하지 않아?
            </li>
          </ul>
          <div className="myself_memoji">
            <img src={Memoji_smile} className="memoji" alt="노트북 보는 미모지" />
          </div>
        </div>
      </article>
    );
  }
}

export default Myself;
