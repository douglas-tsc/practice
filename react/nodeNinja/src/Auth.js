const Auth = {
  isAuthenticated: false,
  server: 'https://pie-lake.gomix.me/',
  // server: 'http://localhost:3000/',
  authenticate (username, password, cb) {
    fetch(`${Auth.server}login?username=${username.value}&password=${password.value}`, {
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
  register (username, password, cb) {
    fetch(`${Auth.server}signup?username=${username.value}&password=${password.value}`, {
      method: 'POST',
      credentials: 'include'
    })
    .then(blob => blob.json())
    .then(res => {
      if (res.authenticated) {
        Auth.isAuthenticated = true;
      }
    }
  ).then(cb);
  },
  signout (cb) {
    fetch(`${Auth.server}logout`, {
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
  // addTutorial (cb) {
  //   fetch(`${Auth.server}logout`, {
  //     method: 'POST',
  //     credentials: 'include'
  //   })
  //   .then(blob => blob.json())
  //   .then(res => {
  //     if (!res.authenticated) {
  //       Auth.isAuthenticated = false;
  //     }
  //   }).then(cb);
  // }
};

export default Auth;
