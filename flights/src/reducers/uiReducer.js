import {types} from '../types/types'

const initialState = {
    errorEmail: false,
    errorPassword: false
}

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.errorEmail:
            return{
                ...state,
                errorEmail: true,
            }
        case types.errorPassword:
            return{
                ...state,
                errorPassword: true,
            }
        default:
            return state
    }
}