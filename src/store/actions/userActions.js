import axios from 'axios';

import userData from '../../data/user.json';
const baseUrl = "http:localhost:8080"
export const getUserAction = () => {
    return (dispatch) => {
        try {
            const data = userData;
            dispatch({ type: 'USER_SUCCESS', payload: data })
        } catch (err) {
            console.log(err);
        }
    }
}