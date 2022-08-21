import { GET_PROFILE, LOGIN, LOGOUT, SIGNUP } from "./actionTypes"

export const signup = (payload) => {
    return {
        type: SIGNUP,
        payload
    }
}
export const login = (payload) => {
    return {
        type: LOGIN,
        payload
    }
}
export const getProfile = (payload) => {
    return {
        type: GET_PROFILE,
        payload
    }
} 
export const logout = () => {
    return {
        type: LOGOUT
    }
} 