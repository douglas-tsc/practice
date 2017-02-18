const Auth = {
  isAuthenticated: false,
  authenticate (username, password, cb) {
    fetch(`http://localhost:3001/login?username=${username.value}&password=${password.value}`, {
      method: 'POST',
      credentials: 'include'
    })
    .then(blob => blob.json())
    .then(res => {
      if (res.authenticated) {
        Auth.isAuthenticated = true;
      }
    }).then(cb);
  },
  signout (cb) {
    fetch(`http://localhost:3001/logout`, {
      method: 'GET',
      credentials: 'include'
    })
    .then(blob => blob.json())
    .then(res => {
      if (!res.authenticated) {
        Auth.isAuthenticated = false;
      }
    }).then(cb);
  }
};

export default Auth;
