import axios from 'axios';
import { GET_USER_SUCCESS, GET_USER_LOADING, PUT_PERSONAL_SUCCESS, PUT_PERSONAL_LOADING, PUT_CONTACT_LOADING, PUT_CONTACT_SUCCESS } from 'store/state/user';

const baseUrl = "http://localhost:8080"

export const GetUserAction = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_USER_LOADING })
      const { data } = await axios.get(`${baseUrl}/me`)
      console.log("GetUserAction! data: ", data)
      dispatch({ type: GET_USER_SUCCESS, payload: data })
    } catch (error) {
      console.error("Oh no an error, do something about it!")
    }
  }
}

export const PutPersonalInfoAction = (info) => {
  return async (dispatch) => {
    try {
      dispatch({ type: PUT_PERSONAL_LOADING })
      const { data } = await axios.post(`${baseUrl}/me/profile-update`, info)
      console.log("PutPersonalInfoAction! data: ", data)
      dispatch({ type: PUT_PERSONAL_SUCCESS, payload: data })
    } catch (error) {
      console.error("Oh no an error, do something about it!")
    }
  }
}

export const PutContactInfoAction = (info) => {
  return async (dispatch) => {
    try {
      dispatch({ type: PUT_CONTACT_LOADING })
      const { data } = await axios.post(`${baseUrl}/me/contact-update`, info)
      console.log("PutContactInfoAction! data: ", data)
      dispatch({ type: PUT_CONTACT_SUCCESS, payload: data })
    } catch (error) {
      console.error("Oh no an error, do something about it!")
    }
  }
}