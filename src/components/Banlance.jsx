
const { Component } = require("react");


class Banlance extends Component {
  
  render() {
    return (
      <div className="balance_group">
        <div className="balance_asking">
          <p className="count">
            <span className="count_page">1</span>/
            <span className="count_total">3</span>
          </p>
          <h3>포트폴리오를 보니 이 친구...</h3>
        </div>
        <ul className="balance_answer">
          <li className="balance_radio_item">
            <label htmlFor="answer_Q1" className="balance_label">
              <input id="answer_Q1" name="Q1" type="radio" className="balance_input_hidden"/>
              <span className="balance_a">
                다재다능한<br />실력있는 친구
              </span>
            </label>
          </li>
          <li className="balance_radio_item">
            <label htmlFor="answer_Q2" className="balance_label">
              <input id="answer_Q2" name="Q1" type="radio" className="balance_input_hidden"/>
              <span className="balance_a">
                다재다능한<br />실력있는 친구
              </span>
            </label>
          </li>
        </ul>
      </div>
    );
  }
}

export default Banlance;
