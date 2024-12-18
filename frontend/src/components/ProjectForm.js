import React, { useState } from 'react';
import axios from 'axios';
import config from '../config';

function ProjectForm() {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [id, setId] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const project = { name, code };

    if (id) {
      axios.put(`${config.backendUrl}/api/projects/${id}`, project)
        .then(response => console.log('Projet mis à jour:', response.data))
        .catch(error => console.error('Erreur lors de la mise à jour du projet:', error));
    } else {
      axios.post(`${config.backendUrl}/api/projects`, project)
        .then(response => console.log('Projet créé:', response.data))
        .catch(error => console.error('Erreur lors de la création du projet:', error));
    }
  };

  return (
    <div>
      <h2>{id ? 'Modifier' : 'Créer'} un Projet</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nom du projet"
        />
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Code du projet"
        />
        <button type="submit">{id ? 'Mettre à jour' : 'Créer'}</button>
      </form>
    </div>
  );
}

export default ProjectForm;
