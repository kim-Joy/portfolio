import Header from 'components/Header';
import Intro from 'pages/Intro';
import Skill from 'pages/Skill';
import Myself from 'pages/Myself';
import Game from 'pages/Game';
import Finish from 'pages/Finish';


const { Component } = require("react");

class Fullpage extends Component {

  render() {
    return (
      <div className="fullpage">
        <Header 
          menu = {true}
        />
          <div className="fullpage_X">
            <Intro />
            <Skill />
            <Myself />
            <Game />
            <Finish />
          </div>
      </div>
    );
  }
}

export default Fullpage;


/* 

classname="test" width 값 페이지 마다 들어나면 작동으로 퍼센트 늘어나게 작업 
*/