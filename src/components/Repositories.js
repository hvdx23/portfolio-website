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
                    
                    return (
                    <div className= "repo-box">
                        <li key={repo.id}>
                            <a href={repo.html_url}>{repo.name}</a>
                            <p style={{textAlign:'center', marginLeft:'10%',marginRight :'10%'}}>{repo.description}</p>
                        </li>
                    </div>
                    );
})}
            </ul>
        </div>
    );
}

export default Repositories;