import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('/api/projects')
      .then(response => setProjects(response.data))
      .catch(error => console.error('Erreur lors de la récupération des projets:', error));
  }, []);

  return (
    <div>
      <h2>Liste des Projets</h2>
      <ul>
        {projects.map(project => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;
