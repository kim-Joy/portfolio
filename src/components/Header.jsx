import {Link} from 'react-router-dom';
import Nav from "components/Nav"
const { Component } = require("react");


class Header extends Component {

  Menuhandler = () => { 
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
  }

  Modehandler = () => { 
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

  render() {
    return (
      <div className="header">
        <div className="skipNav">
          <Link to="/intro">인트로 페이지 이동</Link>
          <Link to="/intro">메뉴 버튼으로 이동</Link>
        </div>
        <h1 className="visuallyhidden">logo</h1>
        <header className="header_gnb">
          <div clssName="btn_menu_group">
            <button type="button" className="btn_menu" onClick={this.Menuhandler}>
              <p className="visuallyhidden">메뉴</p>
              <span>1</span>
              <span>2</span>
              <span>3</span>
            </button>
          </div>
          <div className="dynamic_island">
              bgm
          </div>
          <button type="button" className="btn_mode" onClick={this.Modehandler}>
            <span className="visuallyhidden">mode system</span>
          </button>
        </header>
        <Nav />
      </div>
    );
  }
}

export default Header;
