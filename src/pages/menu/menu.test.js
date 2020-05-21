import React from 'react';
import { mount } from 'enzyme';
import { combineReducers, createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { MenuPage } from './menu.component';

export const createMockStore = ({ state, reducers }) => {
  const store = createStore(combineReducers(reducers), state);
  return {
    ...store,
    persistor: {
      persist: () => null,
    },
  };
};

describe('MenuPage', () => {
  let wrapper;
  let mockFetchCollectionsStart;
  let store;

  beforeEach(() => {
    const mockReducer = (
      state = {
        isFetching: true,
      },
      action
    ) => state;

    const mockState = {
      menu: {
        isFetching: true,
      },
    };

    mockFetchCollectionsStart = jest.fn();

    store = createMockStore({
      state: mockState,
      reducers: { menu: mockReducer },
    });

    const mockMatch = {
      path: '',
    };

    const mockProps = {
      match: mockMatch,
      fetchCollectionsStart: mockFetchCollectionsStart,
    };

    wrapper = mount(
      <BrowserRouter>
        <Provider store={store}>
          <MenuPage {...mockProps} />
        </Provider>
      </BrowserRouter>
    );
  });

  it('should render MenuPage component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render MenuPage component', () => {
    expect(mockFetchCollectionsStart).toHaveBeenCalled();
  });
});
