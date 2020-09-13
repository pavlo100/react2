import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { push } from 'connected-react-router';
import { authService } from '../services';
import * as types from '../types';
import { getTopics } from './topics';

export const toggleLoginMode = createAction(types.TOGGLE_LOGIN_MODE);

const logIn = createAsyncThunk<any, { email: string, password: string }>(
  'users/logIn',
  async (data, { dispatch, rejectWithValue }) => {
    try {
      await authService().login(data);
      dispatch(getTopics());
      dispatch(push('/'));
      return 'You have been successfully logged in';
    } catch (err) {
      return rejectWithValue('Oops! Invalid username or password');
    }
  }
);

const signUp = createAsyncThunk<any, { email: string, password: string }>(
  'users/signUp',
  async (data, { dispatch, rejectWithValue }) => {
    try {
      await authService().signUp(data);
      dispatch(push('/'));
      return 'You have successfully registered an account!';
    } catch (err) {
      return rejectWithValue('Oops! Something went wrong when signing up');
    }
  }
);

const logOut = createAsyncThunk(
  'users/logOut',
  async (data, { rejectWithValue }) => {
    try {
      const response = await authService().logOut();
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export default { logOut, logIn, signUp };
