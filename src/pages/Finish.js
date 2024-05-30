import 'styles/finish.css';

import Memoji_heart from 'assets/images/memoji/heart.svg';

const { Component } = require("react");




class Finish extends Component {
  
  render() {
    return (
      <article className="finish" id="finish"> 
        <div className="pos_center">
        <img src={Memoji_heart} className="memoji" alt="하트하는 미모지" />
        <p className="bubble bubble_tail"></p>
        </div>
      </article>
    );
  }
}

export default Finish;
