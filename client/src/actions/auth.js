import { AUTH } from '../constants/actionTypes.jsx';
import * as api from '../api/index.js';

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });
    localStorage.setItem('profile', JSON.stringify({ ...data }));
    navigate("/");

  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    localStorage.setItem('profile', JSON.stringify({ ...data }));

    navigate("/");
  } catch (error) {
    console.log(error);
  }
};