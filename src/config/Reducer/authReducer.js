const def = {
  userId: undefined,
  phoneNumber: undefined,
};

const AuthReducer = (state = def, action) => {
  console.log('reducer()', state, action);
  switch (action.type) {
    case 'LOGIN':
      return {
        userId: action.payload.userId,
        phoneNumber: action.payload.phoneNumber,
      };
    case 'LOGOUT':
      return def;
    default:
      return state;
  }
};
export default AuthReducer;
