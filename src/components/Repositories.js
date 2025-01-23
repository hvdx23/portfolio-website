import React, { useState, useEffect } from 'react';

function Repositories() {
    const [repositories, setRepos ]= useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/hvdx23/repos')
          .then(response => response.json())
          .then(data => setRepos(data))
          .catch(error => console.error('Error fetching repositories:', error));
      }, []);

    return (
        <div className="repositories">
            <h1>My Github Repositories</h1>
            <ul>
                {repositories.map(repo => {
                    console.log(`ID: ${repo.id}, Name: ${repo.name}`);
                    return (
                        <div className= "repo-box">
                    <li key={repo.id}>
                        <a href={repo.html_url}>{repo.name}</a>
                    <p>{repo.description}</p>
                    </li>
                    </div>
                    );
})}
            </ul>
        </div>
    );
}

export default Repositories;