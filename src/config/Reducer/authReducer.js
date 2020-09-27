const def = {
  phoneNumber: null,
};

const AuthReducer = (state = def, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        phoneNumber: action.payload.phoneNumber,
      };
    case 'LOGOUT':
      return def;
    default:
      return state;
  }
};
 export default AuthReducer