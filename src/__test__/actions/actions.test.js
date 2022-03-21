import actions from '../../actions';
import ProductMock from '../../__mocks__/ProductMock';

describe('Actions', () => {
  test('ADD_TO_CART Action', () => {
    const payload = ProductMock;
    const expected = {
      type: 'ADD_TO_CART',
      payload,
    };
    expect(actions.addToCart(payload)).toEqual(expected);
  });
  test('REMOVE_FROM_CART Action', () => {
    const payload = ProductMock;
    const expected = {
      type: 'REMOVE_FROM_CART',
      payload,
    };
    expect(actions.removeFromCart(payload)).toEqual(expected);
  });
});

/*
const addToCart = payload => ({
  type: 'ADD_TO_CART',
  payload,
});

const removeFromCart = payload => ({
  type: 'REMOVE_FROM_CART',
  payload,
});

const actions = {
  addToCart,
  removeFromCart,
};

export default actions;*/
