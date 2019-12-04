import axios from 'axios';
import { setAlert } from './alert';
import { REGISTER_SUCCESS, REGISTER_FAIL } from './types';

// Register User
export const register = ({ name, email, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({ name, email, password });
  //console.log(`body/${body}/ config/${config.headers}/`);
  try {
    const res = await axios.post('/api/users', body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    //console.log(`err/N/ res/${res}/`);
  } catch (err) {
    console.log(err.response.data.error);
    const errors = err.response.data.error;
    if (errors) {
      //console.log(errors);
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    //dispatch({
    //  type: REGISTER_FAIL
    //});
  }
};
