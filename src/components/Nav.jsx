
import { Component } from "react";
import { Link } from "react-router-dom";

const nav_catrgory = [
  {key: "1", class: "intro", title: "intro", to: '/Intro'},
  {key: "2", class: "skill", title: "Skill", to: '/Skill'},
  {key: "3", class: "myself", title: "my self", to: '/MySelf'},
  {key: "4", class: "game",title: "Balance game", to: '/Game'},
  {key: "5", class: "finish",title: "Good bye", to: '/Finish'}
]


const scrollToSection = (id) => {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  document.querySelector('.header').classList.remove('on');
  document.querySelector('.btn_menu').classList.remove('on'); 
  document.querySelector('.nav').classList.remove('active');
};

class Nav extends Component {
  observer = null;

  componentDidMount() {
    this.observer = new IntersectionObserver(this.handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    });

    nav_catrgory.forEach(item => {
      const element = document.getElementById(item.class);
      if (element) {
        this.observer.observe(element);
      }
    });
  }

  componentWillUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  handleIntersection = (entries) => {
    const name_tag_animation = document.querySelector('.name_info_tag');
    const skill_bubble = document.querySelector('.skill_memoji .bubble');
    
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        if (id === 'intro') {
          name_tag_animation.classList.add('on');
        } else if (id === 'skill') {
          skill_bubble.classList.add('on');
        } else {
          name_tag_animation.classList.remove('on');
          skill_bubble.classList.remove('on');
        }
      }
    });
  };

  render(props) {
    return (
      <div className="nav">
          {
          this.menu === true ? 
            <button type="button"><span></span></button> : 
            <Link to="/FullPage" className="btn_back">
              <span className="visuallyhidden">뒤로가기</span>
            </ Link>  
          }
        <nav className="gnb_category"> 
          <ol>
            {nav_catrgory.map((item) =>(
              <li key={item.key} className={`category_${item.class}`}>
                <button type="button" className="btn_category" onClick={() => scrollToSection(`${item.class}`)}>{item.title}</button>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    );
  }
}

export default Nav;
