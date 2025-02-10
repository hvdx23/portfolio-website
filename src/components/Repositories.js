import React, { useState, useEffect } from 'react';
// import RepositoryCard from './RepositoryCard';
import Card from './Repositoryver2Card';

function Repositories() {
    const [repositories, setRepos] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/hvdx23/repos')
            .then(response => response.json())
            .then(data => setRepos(data))
            .catch(error => console.error('Error fetching repositories:', error));
    }, []);

    return (
        <div className="repositories">
            <h1>My Github Repositories</h1>
            <div className="repo-list">
                {repositories.map(repo => (
                    <Card key={repo.id} repo={repo} />
                ))}
            </div>
        </div>
    );
}

export default Repositories;