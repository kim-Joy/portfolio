import Confrim from 'components/Confrim';
import 'styles/game.css';

import Memoji_v from 'assets/images/memoji/v.svg';

const { Component } = require("react");




class Game extends Component {
  
  render() {
    return (
      <article className="balance_game" id="game"> 
        <div className="pos_center">
          <div className="game_memoji">
            <img src={Memoji_v} className="memoji" alt="브이하는 미모지" />
          </div>
          <div className="balance_group">
            <div className="balance_asking">
              <p className="count">
                <span className="count_page">1</span>
                <span className="count_total">3</span>
              </p>
              <h3>포트폴리오를 보니 이 친구...</h3>
            </div>
            <ul className="balance_answer">
              <li className="balance_radio_item">
                <label htmlFor="answer_Q1" className="balance_label">
                  <input id="answer_Q1" name="Q1" type="radio" className="balance_input_hidden"/>
                  <span className="balance_a">
                    다재다능한<br />실력있는 친구
                  </span>
                </label>
              </li>
              <li className="balance_radio_item">
                <label htmlFor="answer_Q2" className="balance_label">
                  <input id="answer_Q2" name="Q1" type="radio" className="balance_input_hidden"/>
                  <span className="balance_a">
                    다재다능한<br />실력있는 친구
                  </span>
                </label>
              </li>
            </ul>
          </div>
          <p className="balance_guide">게임에 참여 후, 다양한 결과지를 확인하세요.<br />
데이터 수집을 하지 않는 랜딩페이지 임을 알려드립니다.</p>
        </div>
        <Confrim />
      </article>
    );
  }
}

export default Game;
