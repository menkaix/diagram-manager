import React, { useState } from 'react';
import axios from 'axios';

function DiagramForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [id, setId] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const diagram = { title, content };

    if (id) {
      axios.put(`/api/diagrams/${id}`, diagram)
        .then(response => console.log('Diagramme mis à jour:', response.data))
        .catch(error => console.error('Erreur lors de la mise à jour du diagramme:', error));
    } else {
      axios.post('/api/diagrams', diagram)
        .then(response => console.log('Diagramme créé:', response.data))
        .catch(error => console.error('Erreur lors de la création du diagramme:', error));
    }
  };

  return (
    <div>
      <h2>{id ? 'Modifier' : 'Créer'} un Diagramme</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Titre du diagramme"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Contenu du diagramme"
        />
        <button type="submit">{id ? 'Mettre à jour' : 'Créer'}</button>
      </form>
    </div>
  );
}

export default DiagramForm;
