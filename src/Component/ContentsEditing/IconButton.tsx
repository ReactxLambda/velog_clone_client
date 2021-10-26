import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
type IconButtonType = {
  icon: string;
  onClick: (any: any) => void | undefined;
};
const IconButton: React.FC<IconButtonType> = ({ icon, onClick }) => {
  const FormatItalic = require('@material-ui/icons/' + icon).default;
  return (
    <Button onClick={onClick}>
      <FormatItalic />
    </Button>
  );
};

export default IconButton;
