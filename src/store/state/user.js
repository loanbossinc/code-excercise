
export const USER_SUCCESS = "USER_SUCCESS";

const initialState = {
    data: {
        firstName: '',
        lastName: '',
        role: '',
        roleFunction: '',
        email: '',
        phone: '',
        street: '',
        city: '',
        state: '',
        zip: '',
    }
  };



export default function userReducer(state = initialState, { type, payload }) {
    switch (type) {
      case USER_SUCCESS:
        return {
          ...state,
          data: payload
        };
      default:
        return state;
    }
  }