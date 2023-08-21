import { LOGIN, REQUEST } from "./authTypes";
import { auth } from "../../utils/requestOptions";
import axios from "axios";

export const requestSessionToken = () => {
  return {
    type: REQUEST
  }
}

export const login = (token) => {
  return {
    type: LOGIN,
    payload: token
  }
}

export const requestSession = () => {
  return (dispatch) => {
    dispatch(requestSessionToken());
    axios
      .request(auth)
      .then(function (response) {
        const token = response.data.guest_session_id
        sessionStorage.setItem('token', token);
        dispatch(login(token));
      })
      .catch(function (error) {
        console.error(error);
      });
  };
};