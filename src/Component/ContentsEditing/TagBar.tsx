import React, { useState } from 'react';
import './Style/TagBar.scss';
import Tag from './Tag';

const TagBar: React.FC = () => {
  const [tagInputValue, setTagInputValue] = useState('');
  const [tags, setTags]: [string[], (any: any) => void] = useState([]);
  const Enter_Check = (event: any) => {
    // 엔터키의 코드는 13입니다.
    if (event.keyCode == 13) {
      if (tagInputValue !== '' && !tags.includes(tagInputValue)) {
        console.log(tagInputValue);
        const temp: string[] = [...tags];
        temp.push(tagInputValue);
        setTags(temp);
      }
      setTagInputValue('');
    }
  };
  return (
    <div>
      {tags.map((input: string) => {
        return <Tag input={input} changeTags={setTags} origTags={tags} />;
      })}

      <input
        placeholder="태그를 입력하세요"
        tabIndex={2}
        className="TagInput"
        value={tagInputValue}
        onChange={(e) => setTagInputValue(e.target.value)}
        onKeyDown={Enter_Check}
      />
    </div>
  );
};

export default TagBar;
