import { Component } from "react";
import { Link } from 'react-router-dom';

import "styles/import.css";

import Nav from "components/Nav"

import music from 'assets/music/celeb.mp4';





class Header extends Component {


  //load 
  componentDidMount() {
    const waveform = document.querySelector(".waveform");

    for (let i = 0; i < 6; i++) {
      const create_line = document.createElement('i');
      create_line.className = 'wave_line';
      waveform.appendChild(create_line);
    }
  }


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
      clearInterval(this.heightInterval);
    } else {
      audio.play();
      this.heightInterval = setInterval(this.changeHeight, 500);
    }

  }

  changeHeight = () => {
  const wave_lines = document.querySelectorAll('.wave_line');
   wave_lines.forEach(wave_line => {
    const randomHeight = Math.floor(Math.random() * 23) + 3; 
    wave_line.style.height = `${randomHeight}px`;
  });
  }


  

  render() {
    const { menu } = this.props;

    return (
      <div className="header">
        <div className="skipNav">
          <Link to="/intro">인트로 페이지 이동</Link>
          <Link to="/intro">메뉴 버튼으로 이동</Link>
        </div>
        <h1 className="visuallyhidden">logo</h1>
        <header className="header_gnb">
         {menu === true ? 
          <button type="button" className="btn_menu" onClick={this.Menu}>
              <p className="visuallyhidden">메뉴</p>
              <span></span>
              <span></span>
              <span></span>
          </button> : 
          <Link to="/" className="btn_back">
            <span className="visuallyhidden">뒤로가기</span>
            <i className="back_icon"></i>
        </ Link>  
         }
          <div className="dynamic_island">
            <button type="button" className="btn_island" onClick={this.player}>
                <span className="album_art"></span>
                <span className="waveform"></span>
            </button>
            <p className="visuallyhidden">음악 재생/정지</p>
            <audio controls className="visuallyhidden" id="audio">
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
