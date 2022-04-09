const authUserSuccess = (userdata) => {
  return {
    type: "AUTH_USER_SUCCESS",
    payload: {
      user: userdata,
      message: userdata.message,
      status: 200
    }
  }
}

const authUserFail = () => {
  return {
    type: "AUTH_USER_FAIL",
    payload: {
      message: "Smth went wrong!",
      status: 401
    }
  }
}

export { authUserFail, authUserSuccess }