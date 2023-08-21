import { LOGIN, REQUEST } from "./authTypes";

const initialToken = sessionStorage.getItem('token') || '';

const initialState = {
  token: initialToken,
  loading: false
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST:
      return { ...state, loading: true}
    case LOGIN:
      return { token: action.payload, loading: false }
     default:
      return state; 
  }
}

export default authReducer;