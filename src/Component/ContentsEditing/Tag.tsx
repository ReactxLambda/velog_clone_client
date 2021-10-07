import React from 'react';
import './Style/Tag.scss';
type TagType = {
  input: string;
  changeTags: (p1: string[]) => void;
  origTags: string[];
};
const Tag: React.FC<TagType> = ({ input, changeTags, origTags }) => {
  const removeTag = (eventTarget: any) => {
    console.log(input);
    changeTags(origTags.filter((tag) => tag !== input));
  };
  return (
    <div className="tag" onClick={removeTag}>
      {input}
    </div>
  );
};

export default Tag;
