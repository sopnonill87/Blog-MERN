import * as actions from "../actions/authActions";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: false,
  user: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case actions.USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case actions.USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };

    case actions.LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };

    case actions.REGISTER_SUCCESS:
      //console.log("payload from register success reducer: ", action.payload);
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: false,
        isLoading: false,
      };

    case actions.AUTH_ERROR:
    case actions.LOGIN_FAIL:
    case actions.REGISTER_FAIL:
    case actions.LOGOUT_SUCCESS:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };

    default:
      return state;
  }
}
