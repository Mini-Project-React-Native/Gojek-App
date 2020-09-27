const setLogin = data => {
  return {
    payload: {
      phoneNumber: data.phoneNumber,
    },
    type: 'LOGIN',
  };
};

const setLogout = () => {
  return {
    type: 'LOGOUT',
  };
};

export { setLogin, setLogout };
