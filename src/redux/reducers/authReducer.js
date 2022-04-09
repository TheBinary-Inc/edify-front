const initialState = {
  user: null,
  error: false,
  message: '',
  status: null,
  isAuthenticated: false
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
      case "AUTH_USER_SUCCESS":
        return {
          user: action.payload.user,
          message: action.payload.message,
          status: action.payload.status,
          isAuthenticated: true,
          error: false
        }
      case "AUTH_USER_FAIL": 
        return  {
          ...state,
          message: action.payload.message,
          status: action.payload.status,
          error: true
        }
      default:
        return state
    }
}

export default authReducer;