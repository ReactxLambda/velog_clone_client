import React, { Fragment } from 'react';
import TextField from '@material-ui/core/TextField';

type InputType = {
  type: string;
  contents: string;
  setContents: Function;
  hint: string;
  disabled: boolean;
  label: string;
};
const Input: React.FC<InputType> = ({ type, label, contents, setContents, hint, disabled }) => {
  return (
    <Fragment>
      <TextField
        type={type}
        label={label}
        value={contents}
        onChange={(e) => setContents(e.target.value)}
        helperText={hint}
        disabled={disabled}
      />
    </Fragment>
  );
};

export default Input;
