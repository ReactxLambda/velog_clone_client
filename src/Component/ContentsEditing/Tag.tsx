import React from 'react';
import './Style/Tag.scss';
type TagType = {
  input: string;
};
const Tag: React.FC<TagType> = ({ input }) => {
  return <div className="tag">{input}</div>;
};

export default Tag;
