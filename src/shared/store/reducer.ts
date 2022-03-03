import { SEARCH, SET_CODE, SET_TOKEN } from '$constants/actions';

export const reducer = (state, action) => {
  const {
    type, code, token, search,
  } = action;

  switch (type) {
    case SET_CODE:
      return {
        ...state,
        code,
      };
    case SET_TOKEN:
      return {
        ...state,
        token,
      };
    case SEARCH:
      return {
        ...state,
        search,
      };
    default:
      return state;
  }
};
