import {Link} from 'react-router-dom';

const { Component } = require("react");



class Result extends Component {

  
  render() {
    return (
      <section className="result"> 
        <div>
          미모지
        </div>
        <div>
          <div calsaaName="txt_group">
            <h3 className="title">
              잠시만요~~
              아쪼구
            </h3>
            <p className="summary">나를 못알아봐?</p>
            <p></p>
          </div>
          <div className="btn_bottom_group">
            <Link to="/" target="_blank" className="btn">프로젝트 기여도</Link>
            <Link to="/" target="_blank" className="btn">자기개발 문서관리</Link>
          </div>
        </div>
      </section>
    );
  }
}

export default Result;
