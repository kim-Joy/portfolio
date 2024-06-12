import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const asking_title = ['포트폴리오를 보니 이 친구...', '우리 회사 업무에 적합 한...', '고민 끝에 내린 면접 결정'];
const balance_answer_item = [
  { key: "1", name: "item01", answer1_1: '다재다능한', answer1_2: '실력있는 친구', answer2_1: '부족하지만', answer2_2: '궁금해지는 친구', answer1_score: '10', answer2_score: '5' },
  { key: "2", name: "item02", answer1_1: '실력자다!', answer1_2: '우리와 함께 갑시다.', answer2_1: '실력자지만,', answer2_2: '우리회사와 맞지 않다', answer1_score: '10', answer2_score: '5' },
  { key: "3", name: "item03", answer1_1: '이 친구 아니면 안된다.', answer1_2: '(면접 연락을 취한다)', answer2_1: '아쉽지만,,,', answer2_2: '취업에 성공하시길 응원합니다.', answer1_score: '10', answer2_score: '0' }
];

const Banlance = () => {
  const [currentIndex, setCurrentIndex] = useState();
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    sessionStorage.setItem(name, value);

    const nextIndex = currentIndex + 1;
    if (nextIndex >= asking_title.length) {
      const KEY_ITEM01 = sessionStorage.getItem('item01');
      const KEY_ITEM02 = sessionStorage.getItem('item02');
      const KEY_ITEM03 = sessionStorage.getItem('item03');
      const TOTAL_SCORE = parseInt(KEY_ITEM01) + parseInt(KEY_ITEM02) + parseInt(KEY_ITEM03);
      console.log('total ' + TOTAL_SCORE);

      // Navigate to different pages based on TOTAL_SCORE
      if (TOTAL_SCORE >= 25) {
        console.log('결과페이지 1');
        navigate('/Result');
      } else if (TOTAL_SCORE >= 15) {
        console.log('결과페이지 2'); // Medium score page
        navigate('/medium-score-page');
      } else {
        console.log('결과페이지 3'); // Low score page
        navigate('/low-score-page');
      }
    } else {
      setCurrentIndex(nextIndex);
    }
  };

  const currentQuestion = balance_answer_item[currentIndex];

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
        <li className="balance_answer on" key={currentQuestion.key}>
          <div className="balance_radio_item">
            <label htmlFor={`answer_${currentQuestion.name}_1`} className="balance_label">
              <input
                id={`answer_${currentQuestion.name}_1`}
                name={currentQuestion.name}
                type="radio"
                value={currentQuestion.answer1_score}
                className="balance_input_hidden"
                onChange={handleInputChange}
              />
              <span className="balance_a">
                {currentQuestion.answer1_1}<br />{currentQuestion.answer1_2}
              </span>
            </label>
          </div>
          <div className="balance_radio_item">
            <label htmlFor={`answer_${currentQuestion.name}_2`} className="balance_label">
              <input
                id={`answer_${currentQuestion.name}_2`}
                name={currentQuestion.name}
                type="radio"
                value={currentQuestion.answer2_score}
                className="balance_input_hidden"
                onChange={handleInputChange}
              />
              <span className="balance_a">
                {currentQuestion.answer2_1}<br />{currentQuestion.answer2_2}
              </span>
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Banlance;
