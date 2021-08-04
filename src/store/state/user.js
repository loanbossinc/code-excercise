const { string } = require("prop-types");



const initialState = {
  personalLoading: false,
  contactLoading: false,
  userInfo: {
    firstName: '',
    lastName: '',
    title: '',
    jobFunction: '',
    state: '',
    city: '',
    zipcode: '',
    street: '',
    phone: ''
  }
}

export const GET_USER_LOADING = "GET_USER_LOADING";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";

export const PUT_PERSONAL_LOADING = 'PUT_PERSONAL_LOADING';
export const PUT_PERSONAL_SUCCESS = 'PUT_PERSONAL_SUCCESS';

export const PUT_CONTACT_LOADING = 'PUT_CONTACT_LOADING';
export const PUT_CONTACT_SUCCESS = 'PUT_CONTACT_SUCCESS';

export default function userReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_USER_LOADING: return { ...state, personalLoading: true, contactLoading: true }
    case GET_USER_SUCCESS: return { ...state, personalLoading: false, contactLoading: false, userInfo: payload }
    case PUT_PERSONAL_LOADING: return { ...state, personalLoading: true }
    case PUT_PERSONAL_SUCCESS: return { ...state, personalLoading: false, userInfo: { ...state.userInfo, ...payload } }
    case PUT_CONTACT_LOADING: return { ...state, contactLoading: true }
    case PUT_CONTACT_SUCCESS: return { ...state, contactLoading: false, userInfo: { ...state.userInfo, ...payload } }
    default: return state;
  }
}

