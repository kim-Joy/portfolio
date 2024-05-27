import React, { Component } from 'react';
import Header from 'components/Header';
import Intro from 'pages/Intro';
import Skill from 'pages/Skill';
import Myself from 'pages/Myself';
import Balance_game from 'pages/Balance_game';

class Test extends Component {
  componentDidMount() {
    this.handleScroll = () => {
      // 현재 Y축 스크롤 위치
      const scrollY = window.scrollY;

      // X축 스크롤을 Y축 스크롤 위치로 설정
      window.scrollTo(scrollY, scrollY);
    };

    // 스크롤 이벤트 리스너 추가
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <div className="contin">
        <Header />
        <div className="test_box">
          <div className="test">
            <Intro />
            <Skill />
            <Myself />
            <Balance_game />
          </div>
        </div>
      </div>
    );
  }
}

export default Test;
