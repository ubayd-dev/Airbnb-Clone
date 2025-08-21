import axios from "axios";

import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_LOGOUT,
} from "../type/userTypes";


export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    // Simulate an API call
    const userData = { email, password }; // Replace with actual API call

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: userData,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    //  replace with actual URL! from request.http
    const data = await axios.post(
      "http://localhost:5001/login",
      { email, password },
      config
    );
    localStorage.setItem("userInfo", JSON.stringify(data.data));
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.message || "Something went wrong",
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGIN_LOGOUT });
  // Optionally, you can also reset other parts of the state if needed
  // dispatch({ type: USER_RESET });
}