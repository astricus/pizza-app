import React from 'react';
import { shallow } from 'enzyme';
import { OrdersPage } from './orders.component';

let wrapper;
beforeEach(() => {
  const mockProps = {
    cartItems: [],
    total: 100,
  };

  wrapper = shallow(<OrdersPage {...mockProps} />);
});

it('should render OrdersPage component', () => {
  expect(wrapper).toMatchSnapshot();
});
