const { Component } = require("react");


const asking_title = ['포트폴리오를 보니 이 친구...', '우리 회사 업무에 적합 한...', '고민 끝에 내린 면접 결정'];
const balance_answer_item = [
  {key: "1" , name: "item01", answer1_1: '다재다능한', answer1_2: '실력있는 친구', answer2_1: '부족하지만', answer2_2: '궁금해지는 친구', answer1_score: '10', answer2_score: '5' },

  {key: "2" , name: "item02", answer1_1: '실력자다!', answer1_2: '우리와 함께 갑시다.', answer2_1: '실력자지만,', answer2_2: '우리회사와 맞지 않다', answer1_score: '10', answer2_score: '5'},

  {key: "3" , name: "item03", answer1_1: '이 친구 아니면 안된다.', answer1_2: '(면접 연락을 취한다)', answer2_1: '아쉽지만,,,', answer2_2: '취업에 성공하시길 응원합니다.', answer1_score: '10', answer2_score: '0'}
]


class Banlance extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };
  }



  handleInputChange = (event) => {
    const { name, value } = event.target;
    sessionStorage.setItem(name, value);

    this.setState((prev) => {
      const nextIndex = (prev.currentIndex) + 1;

      if (nextIndex >= asking_title.length) {
        const KEY_ITEM01 = sessionStorage.getItem('item01');
        const KEY_ITEM02 = sessionStorage.getItem('item02');
        const KEY_ITEM03 = sessionStorage.getItem('item03');
        const TOTAL_SCORE = parseInt(KEY_ITEM01) + parseInt(KEY_ITEM02) + parseInt(KEY_ITEM03);
        console.log('total' + TOTAL_SCORE);

        // Navigate to different pages based on TOTAL_SCORE
        if (TOTAL_SCORE >= 25) {
          <div>호잇!</div>
          //console.log('결과페이지 1'); // High score page
        } else if (TOTAL_SCORE >= 20 || TOTAL_SCORE >= 15) {
          console.log('결과페이지 2'); // Medium score page
        } else {
          console.log('결과페이지 3')
          //this.props.history.push('/low-score-page'); // Low score page
        }
      }

      return {currentIndex : nextIndex};

    });

    
    

  };

 

  render() {
    const { currentIndex } = this.state;

    return (
      <div className="balance_group">
        <div className="balance_asking">
          <p className="count">
            <span className="count_page">{currentIndex + 1}</span>/
            <span className="count_total">{asking_title.length}</span>
          </p>
          <h2 className="balance_q">{asking_title[currentIndex]}</h2>
        </div>
        <ul className="balance_list_group">
          {balance_answer_item.map((item, index)=> (
            <li 
              className={ currentIndex === index ? "balance_answer on" : "balance_answer" } 
              key={item.key}
            >
            <div className="balance_radio_item">
              <label htmlFor={`answer_${item.name}_1`} className="balance_label">
                <input 
                  id={`answer_${item.name}_1`} 
                  name={item.name} 
                  type="radio"
                  value={`${item.answer1_score}`}
                  className="balance_input_hidden"
                  onChange={this.handleInputChange}
                />
                <span className="balance_a">
                {item.answer1_1}<br />{item.answer1_2}
                </span>
              </label>
            </div>
            <div className="balance_radio_item">
              <label htmlFor={`answer_${item.name}_2`} className="balance_label">
                <input 
                  id={`answer_${item.name}_2`} 
                  name={item.name}
                  type="radio"
                  value={`${item.answer2_score}`}
                  className="balance_input_hidden"
                  onChange={this.handleInputChange}
                />
                <span className="balance_a">
                {item.answer2_1}<br />{item.answer2_2}
                </span>
              </label>
            </div>
          </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Banlance;
