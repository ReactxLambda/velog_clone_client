import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Global/Header/Header';
import './SavesPage.scss';

const SavesPage: React.FC = () => {
  const [savesContents, setSavesContents] = useState([1, 2, 3, 4, 4, 5, 6, 6]);
  const handleRemoveSaves = (id: any) => {
    //삭제 구현
  };
  return (
    <div>
      <Header></Header>
      <div className="savesPagesWrapper">
        <h1>임시 글 목록</h1>
        <div>
          {savesContents.length > 0 &&
            savesContents.map((save: any, index) => {
              return (
                <div className="saveContent">
                  <h3>
                    <Link to="">{'제목'}</Link>
                  </h3>
                  <p>
                    <Link to="">{'내용'}</Link>
                  </p>
                  <section className="savesSubInfo">
                    <div className="savesSubInfoTime">
                      {2021}년{5}월{3}일
                    </div>
                    <button className="savesSubInfoRemove" onClick={() => handleRemoveSaves('id')}>
                      삭제
                    </button>
                  </section>
                </div>
              );
            })}
        </div>
      </div>
      <div></div>
      <div>
        <div>
          <div>
            <h3>임시 글 삭제</h3>
            <div>임시 저장한 글을 삭제하시겠습니까? 삭제한 글은 복구할 수 없습니다.</div>
            <div>
              <button>취소</button>
              <button>확인</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavesPage;
