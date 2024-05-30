import React, { Component } from 'react';
import Header from 'components/Header';
import Intro from 'pages/Intro';
import Skill from 'pages/Skill';
import Myself from 'pages/Myself';
import Game from 'pages/Game';
import Finish from 'pages/Finish';


class Fullpage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numberOfDivs: 0
    };
  }

  componentDidMount() {
    const numberOfDivs = document.querySelectorAll('.fullpage_article > *').length;
    this.setState({ numberOfDivs });

  }

  render() {
    const { numberOfDivs } = this.state;
    return (
      <div className="fullpage">
        <Header />
        <div className="fullpage_X">
          <div className="fullpage_article" style={{'width': `${numberOfDivs * 100}%`}}>
            <Intro />
            <Skill />
            <Myself />
            <Game />
            <Finish />
          </div>
        </div>
      </div>
    );
  }
}

export default Fullpage;


/* 

classname="test" width 값 페이지 마다 들어나면 작동으로 퍼센트 늘어나게 작업 
*/