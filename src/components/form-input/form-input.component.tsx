import React from 'react';
import { InputField, Input, Label } from './form-input.styles';

export type Props = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  value: string;
  type: 'text' | 'email' | 'password';
  id: string;
  name?: string;
  required?: boolean;
};

const FormInput: React.FC<Props> = ({
  handleChange,
  label,
  value,
  ...otherProps
}) => (
  <InputField>
    <Input onChange={handleChange} {...otherProps} />
    {label ? (
      <Label htmlFor={otherProps.id} value={value.length}>
        {label}
      </Label>
    ) : null}
  </InputField>
);

export default FormInput;
