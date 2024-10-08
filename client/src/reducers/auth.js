import * as actionType from '../constants/actionTypes';

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case actionType.AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
      console.log("reducers me data: ",action?.data);
      return { ...state, authData: action.data, loading: true, errors: null };
    case actionType.LOGOUT:
      localStorage.removeItem('profile');
      return { ...state, authData: null, loading: true, errors: null };
    default:
      return state;
  }
};

export default authReducer;