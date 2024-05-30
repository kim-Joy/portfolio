import {Link} from 'react-router-dom';
import Nav from "components/Nav"

import music from 'assets/music/celeb.mp4';

const { Component } = require("react");


class Header extends Component {

  Menu = () => { 
    const header_bg = document.querySelector('.header');
    const nav = document.querySelector('.nav');
    const menu = document.querySelector('.btn_menu');
    nav.classList.toggle('active');
    header_bg.classList.toggle('on');
    menu.classList.toggle('on');
  }

  SystemMode = () => { 
    const BTN_MODE = document.querySelector('.btn_mode');
    const APP = document.querySelector('.App');

    if (BTN_MODE.classList.contains('on')) {
      BTN_MODE.classList.remove('on');
      APP.classList.remove('mode-Light');
      APP.classList.add('mode-Dark');
  } else {
      BTN_MODE.classList.add('on');
      APP.classList.remove('mode-Dark');
      APP.classList.add('mode-Light');
  }
    
  }

  player = () => { 
    const audio = document.querySelector('#audio');
    
    if(!audio.paused){
      audio.pause();
    } else {
      audio.play();
    }
  }

  render() {
    return (
      <div className="header">
        <div className="skipNav">
          <Link to="/intro">인트로 페이지 이동</Link>
          <Link to="/intro">메뉴 버튼으로 이동</Link>
        </div>
        <h1 className="visuallyhidden">logo</h1>
        <header className="header_gnb">
          <button type="button" className="btn_menu" onClick={this.Menu}>
              <p className="visuallyhidden">메뉴</p>
              <span></span>
              <span></span>
              <span></span>
          </button>
          <div className="dynamic_island">
            <button type="button" className="btn_island" onClick={this.player}>
                <span className="album_art"></span>
                <span className="waveform"></span>
            </button>
            <p className="visuallyhidden">음악 재생/정지</p>
            <audio controls autoplay="autoplay" className="visuallyhidden" id="audio">
              <source src={music} type="audio/mpeg" ></source>
            </audio>
          </div>
          <button type="button" className="btn_mode" onClick={this.SystemMode}>
            <span className="visuallyhidden">mode system</span>
          </button>
        </header>
        <Nav />
      </div>
    );
  }
}

export default Header;
