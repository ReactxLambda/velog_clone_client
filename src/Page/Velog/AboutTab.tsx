import { useState } from 'react';
import './About.scss';
const AboutTab: React.FC = ({ match }: any) => {
  let [type, setType] = useState('I');

  return (
    <div>
      <div className="aboutWrapper">
        <div className="about">
          <img src="https://static.velog.io/static/media/undraw_empty.5fd6f2b8.svg" />
          <div className="aboutEmptyMessage">소개가 작성되지 않았습니다.</div>
          <button className="aboutButton">소개 글 작성하기</button>
        </div>
      </div>

      <div className="aboutSaveWrapper">
        <button
          className="aboutSave"
          onClick={() => {
            type === 'I' ? setType('U') : setType('I');
          }}
        >
          {type === 'I' ? '저장하기' : '수정하기'}
        </button>
      </div>
      <div className="abouWriteWrapper">
        <textarea className={type === 'U' ? 'aboutWrite' : ''}></textarea>
        <div className="음 뭔지 모르겠다"></div>
      </div>
    </div>
  );
};

export default AboutTab;
