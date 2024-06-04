import 'styles/intro.css';

const { Component } = require("react");



class Intro extends Component {

  componentDidMount() {
    const name_tag_animation = document.querySelector('.name_info_tag');
    name_tag_animation.classList.add('on');
  }

  render() {
    return (
      <article className="intro" id="intro">
        <div className="name_tag_group" >
          <div className="name_info_tag" >
            <div className="info">
              <div className="info_face"></div>
              <div className="info_txt">
                <dl>
                  <dt>name</dt>
                  <dd>kim joy</dd>
                </dl>
                <dl>
                  <dt>d.o.b</dt>
                  <dd>1994.02.05</dd>
                </dl>
                <dl>
                  <dt>job</dt>
                  <dd>web publisher</dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="name_info_article">
            <h3>안녕<i className="icon_hand"></i> 나는 5년차 웹퍼블리셔야</h3>
            <p>기획, UIUX 디자인, 퍼블리싱까지<br /> 여러분야를 카멜레온처럼 습득이 빠른 친구지. <br />
            자기개발도 틈틈히 하는 열정 인재라고 할까?</p>
          </div>
        </div>

        <div className="figure_around">
        <span className="figure_portfolio"></span>
          <span className="figure_bone"></span>
          <span className="figure_start purple"></span>
          <span className="figure_start blue"></span>
          <span className="figure_start_line"></span>
          <span className="figure_oval"></span>
        </div>
        
        <div className="weclome_group">
          <div>
            <span className="figure_start green"></span>
            <div className="weclome_sign"></div>
          </div>
        </div>

        <div className="gradation_bg">
          <span className="gradation_line"></span>
        </div>
      </article>
    );
  }
}

export default Intro;
