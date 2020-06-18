import authReducer from "../reducers/authReducer";
import axios from "axios";

export const USER_LOADING = "USER_LOADING";
export const USER_LOADED = "USER_LOADED";
export const AUTH_ERROR = "AUTH_ERROR";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

export const getUser = () => ({ type: USER_LOADING });

export const getUserSuccess = (user) => ({
  type: USER_LOADED,
  payload: user,
});

export const getUserFailure = () => ({ type: AUTH_ERROR });

//Check token & load user
export function loadUser() {
  return async (dispatch, getState) => {
    dispatch(getUser());

    //Get token from localstorage
    const token = getState().auth.token;

    //Headers
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    //If token, add to headers
    if (token) {
      config.headers["x-auth-token"] = token;
    }

    try {
      const response = await fetch(`http://localhost:5000/auth/user`);
      const data = await response.json();
      console.log("user from api:", data);

      dispatch(getUserSuccess(data));
    } catch (error) {
      console.log("Error from auth action");
      dispatch(getUserFailure());
    }
  };
}

export const userRegister = () => ({ type: USER_LOADING });

export const userRegisterSuccess = (user) => ({
  type: REGISTER_SUCCESS,
  payload: user,
});

export const userRegisterFailure = () => ({ type: REGISTER_FAIL });

export const register = ({ name, email, password }) => async (dispatch) => {
  console.log("from register action:", name, email, password);

  const body = JSON.stringify({ name: name, email: email, password: password });

  try {
    const response = await fetch(`http://localhost:5000/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: body,
    });

    const result = await response.json();
    dispatch(userRegisterSuccess(result));
  } catch (error) {
    dispatch(userRegisterFailure());
  }
};

//Setup config/headers and token

export const tokenConfig = (getState) => {
  //Get token from localstorage
  const token = getState().auth.token;

  //Headers
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
};
