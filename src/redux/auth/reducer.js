import { GET_PROFILE, LOGIN, LOGOUT, SIGNUP } from "./actionTypes";


const initialState = {
    token:"",
    profile:[]
}
export const reducer = (state = initialState , action) => {
    switch (action.type){
        case SIGNUP : return{
            ...state
        }
        case LOGIN : return{
            ...state,
            token: action.payload
        }
        case GET_PROFILE : return{
            ...state,
            profile: action.payload
        }
        case LOGOUT : return{
            state:initialState
        }
    }
}