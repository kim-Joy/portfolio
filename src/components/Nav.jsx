

const { Component } = require("react");

const nav_catrgory = [
  {key: "1", class: "intro", title: "intro", to: '/Intro'},
  {key: "2", class: "myself", title: "my self", to: '/MySelf'},
  {key: "3", class: "skill", title: "Skill", to: '/Skill'},
  {key: "4", class: "game",title: "Balance game", to: '/Game'},
  {key: "5", class: "finish",title: "Good bye", to: '/Finish'}
]


const scrollToSection = (id) => {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  document.querySelector('.nav').classList.remove('active');
  const name_tag_animation = document.querySelector('.name_info_tag');
  
  if(id === 'intro'){
    name_tag_animation.classList.add('on');
  } else {
    name_tag_animation.classList.remove('on');
  }
};

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <button type="button"><span></span></button>
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
