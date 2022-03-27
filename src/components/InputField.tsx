import React, { FC, useState } from 'react';

interface InputFieldProps {
  setText: (text: string) => void,
}

const InputField: FC<InputFieldProps> = ({ setText }) => {
  return (
    <textarea onChange={e => setText(e.target.value)} placeholder="Enter Text Here" />
  );
};

export default InputField;