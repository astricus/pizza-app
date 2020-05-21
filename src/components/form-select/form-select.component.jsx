import React from 'react';

import {
  GroupContainer,
  FormSelectContainer,
  FormSelectLabel,
} from './form-select.styles';

const FormSelect = ({ handleChange, label, ...props }) => (
  <GroupContainer>
    <FormSelectContainer onChange={handleChange} {...props}>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
    </FormSelectContainer>
    {label ? (
      <FormSelectLabel className={props.value.length ? 'shrink' : ''}>
        {label}
      </FormSelectLabel>
    ) : null}
  </GroupContainer>
);

export default FormSelect;
