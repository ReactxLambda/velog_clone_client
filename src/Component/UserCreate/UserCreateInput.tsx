import { TextareaAutosize } from '@material-ui/core';
import React from 'react';
import './Style/UserCreateInput.scss';

type UserCreateInputType = {
  label: string;
  input: string;
  setInput: (p1: string) => void;
  placeholder?: string;
};
export const UserCreateInput: React.FC<UserCreateInputType> = ({ label, input, setInput, placeholder }) => {
  return (
    <div className="UserCreateInput">
      <div className="UserCreateInput_label_wrapper">
        <label className={'UserCreateInput_label'}>{label}</label>
      </div>
      <div className={'UserCreateInput_input_group'}>
        <div className={'UserCreateInput_input_wrapper'}>
          <input
            className={'UserCreateInput_input'}
            onChange={(e) => setInput(e.target.value)}
            placeholder={placeholder}
          />
        </div>
        <div className={'UserCreateInput_width_maker'}>{input === '' ? placeholder : input}</div>
      </div>
    </div>
  );
};
