export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: process.env.REACT_APP_API_KEY
  }
};

export const auth = {
  method: 'GET',
  url: `${process.env.REACT_APP_BASE_URL}/authentication/guest_session/new`,
  headers: {
    accept: 'application/json',
    Authorization: process.env.REACT_APP_API_KEY
  }
};

export const baseUrl = process.env.REACT_APP_BASE_URL;