import React, { useReducer } from 'react';
import API from '../../utils/API';
import AuthContext from './authContext';
import authReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken';
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  TASKS_LOADED,
  AUTH_ERROR,
  LOGOUT,
  SET_LOADING,
  CLEAR_ERRORS
} from '../types';

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: localStorage.token ? true : false,
    loading: false,
    totalTasks: 0,
    page: 1,
    perPage: 5,
    tasks: [],
    error: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load Tasks
  const loadTasks = async () => {
    setLoading();
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    if (state.isAuthenticated) {
      try {
        const res = await API.get(
          `/tasks/assigned?page=${state.page}&limit=${state.perPage}&order=created&orderMethod=DESC`
        );
        console.log(res.data);
        dispatch({
          type: TASKS_LOADED,
          payload: res.data
        });
      } catch (err) {
        console.log(err.response);
        dispatch({ type: AUTH_ERROR, payload: err.response });
      }
    }
  };

  // Login User
  const login = async formData => {
    try {
      const res = await API.post('/personnel/login', formData);
      console.log(res);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });

      // loadTasks();
    } catch (err) {
      // console.log(err.response);
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response
      });
    }
  };

  // Set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  // LogOut
  const logout = () => dispatch({ type: LOGOUT });

  // Clear Errors
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });
  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        totalTasks: state.totalTasks,
        page: state.page,
        perPage: state.perPage,
        tasks: state.tasks,
        error: state.error,
        setLoading,
        loadTasks,
        login,
        logout,
        clearErrors
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
