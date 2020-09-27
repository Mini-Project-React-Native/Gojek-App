const setLogin = data => {
  console.log('setlogin()', data);
  return {
    payload: data,
    type: 'LOGIN',
  };
};

const setLogout = () => {
  return {
    type: 'LOGOUT',
  };
};

export { setLogin, setLogout };
