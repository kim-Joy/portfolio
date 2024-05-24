import {Link} from 'react-router-dom';
import Nav from "components/Nav"
const { Component } = require("react");

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="skipNav">
          <Link to="/intro">인트로 페이지 이동</Link>
          <Link to="/intro">메뉴 버튼으로 이동</Link>
        </div>
        <header>
          <h1 className="visuallyhidden">logo</h1>
          <div clssName="btn_menu_group">
            <button type="button" className="h">
              <p className="visuallyhidden">메뉴</p>
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div className="dynamic_island">

            </div>
          </div>
            <button type="button" className="btn_mode">
              <span className="visuallyhidden">mode system</span>
            </button>
        </header>
        <Nav />
      </div>
    );
  }
}

export default Header;
