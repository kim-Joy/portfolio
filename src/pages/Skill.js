import { Component } from "react";
import 'styles/skill.css';

import Memoji_computer from 'assets/images/memoji/computer.svg';

const skill_item_coding = [
  {key: "1", class: "html", title: "HTML"},
  {key: "2", class: "css", title: "CSS"},
  {key: "3", class: "js", title: "Java Script"},
  {key: "4", class: "react", title: "React"}
]

const skill_item_tool = [
  {key: "1", class: "figma", title: "Figma"},
  {key: "2", class: "ai", title: "Adobe Illustratorst"},
  {key: "3", class: "ps", title: "Adboe Photoshop"},
  {key: "4", class: "github", title: "Git hub"}
]

const handleOpenNewTab = (url) => {
  window.open(url, "_blank", "noopener, noreferrer");
};




class Skill extends Component {


  
  render() {
    return (
      <article className="skill" id="skill">
        <div className="pos_center">

          <ul className="skill_item_group">
            {skill_item_coding.map((item) =>(
              <li key={item.key} className="skill_item">
                <i className={`skill_icon skill_icon_${item.class}`}></i>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
          <div className="bubble_group">
            <p className="bubble bubble_tail">
              내가 보유하고 있는 스킬
              <i className="bubble_icon_skill"></i>
            </p>
          </div>
          <div className="skill_memoji">
            <img src={Memoji_computer} className="memoji" alt="노트북 보는 미모지" />
            
          </div>
          
          <ul className="skill_item_group">
            {skill_item_tool.map((item) =>(
              <li key={item.key} className="skill_item">
                <i className={`skill_icon skill_icon_${item.class}`}></i>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* <div className="skill_cube_box">
          <div className="cube">
            <div className="one">?</div>
            <div className="two">?</div>
            <div className="three">?</div>
            <div className="four">?</div>
            <div className="five">?</div>
            <div className="six">?</div>
          </div>
          <div className="dim"></div>
        </div> */}
      </article>
    );
  }
}

export default Skill;
