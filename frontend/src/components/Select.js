import React from 'react';
import { Field, ErrorMessage } from 'formik';

function Select(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field
        className="form-control rounded shadow-none"
        as="select"
        id={name}
        name={name}
        {...rest}
      >
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>

      <ErrorMessage component="div" name={name} className="error" />
    </div>
  );
}

export default Select;
