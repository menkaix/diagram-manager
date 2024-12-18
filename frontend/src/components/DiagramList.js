import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';

function DiagramList() {
  const [diagrams, setDiagrams] = useState([]);

  useEffect(() => {
    axios.get(`${config.backendUrl}/api/diagrams`)
      .then(response => setDiagrams(response.data))
      .catch(error => console.error('Erreur lors de la récupération des diagrammes:', error));
  }, []);

  return (
    <div>
      <h2>Liste des Diagrammes</h2>
      <ul>
        {diagrams.map(diagram => (
          <li key={diagram.id}>{diagram.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default DiagramList;
