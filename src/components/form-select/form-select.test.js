import React from 'react';
import { shallow } from 'enzyme';

import FormSelect from './form-select.component';

describe('FormSelect component', () => {
  let wrapper;
  let mockHandleChange;

  beforeEach(() => {
    mockHandleChange = jest.fn();

    const mockProps = {
      label: 'currency',
      handleChange: mockHandleChange,
      value: 'USD',
    };

    wrapper = shallow(<FormSelect {...mockProps} />);
  });

  it('should render FormSelect component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleChange method when input changes', () => {
    wrapper.find('FormSelectContainer').simulate('change');

    expect(mockHandleChange).toHaveBeenCalled();
  });
});
