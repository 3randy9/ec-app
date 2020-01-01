import React from 'react';
import './form-input.styles.scss';

type Props = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  value: string;
  type: 'text' | 'email' | 'password';
  id: string;
  name?: string;
  required?: boolean;
};

const FormInput = ({ handleChange, label, value, ...otherProps }: Props) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        htmlFor={otherProps.id}
        className={`${value.length ? 'shrink' : ''} form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
