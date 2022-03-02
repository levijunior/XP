import { SET_CODE, SET_TOKEN } from '$constants/actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_CODE:
      return {
        ...state,
        code: action.code,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};
