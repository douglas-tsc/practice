function getRepos (username) {
  return fetch(`https://api.github.com/users/${username}/repos`)
  .then(response => response.json());
}

function getUserInfo (username) {
  return fetch(`https://api.github.com/users/${username}`)
   .then(response => response.json());
}

export default function getGithubInfo (username) {
  return Promise.all([getRepos(username), getUserInfo(username)])
    .then(arr => ({
      bio: arr[1],
      repos: arr[0]
    }));
}
