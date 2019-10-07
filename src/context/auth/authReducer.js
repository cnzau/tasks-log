import {
  SET_LOADING,
  TASKS_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  UPDATE_PAGE_LIMIT,
  UPDATE_PAGE,
  CLEAR_ERRORS
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case UPDATE_PAGE_LIMIT:
      return {
        ...state,
        perPage: action.payload
      };
    case UPDATE_PAGE:
      return {
        ...state,
        page: action.payload
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case TASKS_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        totalTasks: action.payload.totalTasks,
        // page: action.payload.page,
        // perPage: action.payload.perPage,
        tasks: action.payload.tasks,
        loading: false
      };
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.accessToken);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
        token: action.payload.accessToken
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        error: action.payload
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};
