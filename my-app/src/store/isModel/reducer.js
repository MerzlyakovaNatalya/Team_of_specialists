import { SET_MODEL } from './actions'

const initialState = {
    isModel: false
  }

  export const modelReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_MODEL: {
            return {isModel: action.payload}
        }
        default: {
            return state;
          }
    }
  }

