import React, { useState, useEffect } from 'react';
import Card from './Repositoryver2Card';


function Repositories() {
    const [repositories, setRepos] = useState([]);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        fetch('https://api.github.com/users/hvdx23/repos')
            .then(response => response.json())
            .then(data => {
                const updatedData = data.map(repo => {
                    if (repo.description === null) {
                        repo.description = "No description available";
                    }
                    return repo;
                });
                setRepos(updatedData);
            })
            .catch(error => console.error('Error fetching repositories:', error));
    }, []);

    return (
        <div className="repositories">
            <h2>My Github Repositories</h2>
            {!isMobile && (
                <div className="repo-list">
                    {repositories.map(repo => (
                        <Card key={repo.id} repo={repo} />
                    ))}
                </div>
            )}
            {isMobile && (
                <div className="mobile-repo">
                    <ul className="repo-box">
                        {repositories.map(repo => (
                            <li key={repo.id}>
                                <a href={repo.html_url}>{repo.name}</a>
                                <p style={{ textAlign: 'center', marginLeft: '10%', marginRight: '10%' }}>{repo.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Repositories;