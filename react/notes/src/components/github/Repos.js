import React from 'react';

const Repos = ({repos}) => (
  <div className=''>
    <div>Github Repos</div>
    <ul className='list pl0 ml0 center mw5 ba b--light-silver br3'>{
        repos.map(
          (repo, index) =>
            <li className='ph3 pv2 bb b--light-silver' key={index}>
              {repo.html_url && <h4><a className='link' href={repo.html_url}>{repo.name}</a></h4>}
              {repo.description && <p>{repo.description}</p>}
            </li>)}
    </ul>
  </div>
);

Repos.propTypes = {
  username: React.PropTypes.string.isRequired,
  repos: React.PropTypes.array.isRequired
};

export default Repos;
