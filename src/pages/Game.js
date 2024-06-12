import React, { Component } from 'react';
import Balance from 'components/Balance';
import Confrim from 'components/Confrim';
import 'styles/game.css';
import Memoji_v from 'assets/images/memoji/v.svg';

class Game extends Component {
  render() {
    return (
      <article className="balance_game" id="game"> 
        <div className="pos_center">
          <div className="game_memoji">
            <img src={Memoji_v} className="memoji" alt="브이하는 미모지" />
          </div>
          <Balance />
          <p className="balance_guide">게임에 참여 후, 다양한 결과지를 확인하세요.<br />
          데이터 수집을 하지 않는 랜딩페이지 임을 알려드립니다.</p>
        </div>
        <Confrim />
      </article>
    );
  }
}

export default Game;
