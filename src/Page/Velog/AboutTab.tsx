import { Fragment, useState } from 'react';
import { CodeMirrorWrapper } from '../Global/Codemirror/CodemirrorWrapper';
import './About.scss';
const AboutTab: React.FC = ({ match }: any) => {
  //I : 소개글 없을 경우
  //E : 소개글 작성할 수 있는 경우
  //U : 소개글 수정할 수 있는 경우 | 소개글이 있는경우
  let [about, setAbout] = useState('안녕 나는 초기값이야~');
  let [type, setType] = useState(about === '' || about === undefined ? 'I' : 'E');
  const handleClickButton = () => {
    if (type === 'E') {
      console.log(`about: ${about}`);
    } else {
    }
    type === 'E' ? setType('U') : setType('E');
  };
  return (
    <Fragment>
      {(about === '' || about === undefined) && type === 'I' ? (
        <div>
          <div className="aboutWrapper">
            <div className="about">
              <img src="https://static.velog.io/static/media/undraw_empty.5fd6f2b8.svg" />
              <div className="aboutEmptyMessage">소개가 작성되지 않았습니다.</div>
              <button className="aboutButton" onClick={() => setType('E')}>
                소개 글 작성하기
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="aboutSaveWrapper">
            <button className="aboutSave" onClick={handleClickButton}>
              {type === 'E' ? '저장하기' : '수정하기'}
            </button>
          </div>
          {type === 'E' ? (
            <div className="aboutEditorWrapper">
              <div>
                <CodeMirrorWrapper
                  value={about}
                  onChange={setAbout}
                  placeholder="당신은 어떤 사람인가요? 당신에 대해서 알려주세요."
                />
              </div>
            </div>
          ) : (
            <div className="aboutContentWrapper">
              <div className="aboutContent">
                <div>
                  <p>{about}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </Fragment>
  );
};

export default AboutTab;
