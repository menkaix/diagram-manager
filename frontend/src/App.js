import React, { useState } from 'react';
import './App.css';
import DiagramList from './components/DiagramList';
import DiagramForm from './components/DiagramForm';
import ProjectList from './components/ProjectList';
import ProjectForm from './components/ProjectForm';

function App() {
  const [activeTab, setActiveTab] = useState('diagrams');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bienvenue dans le Gestionnaire de Diagrammes UML</h1>
        <p>
          Gérez vos diagrammes UML pour vos projets informatiques.
        </p>
      </header>
      <div className="tabs">
        <button onClick={() => setActiveTab('diagrams')}>Diagrammes</button>
        <button onClick={() => setActiveTab('projects')}>Projets</button>
      </div>
      {activeTab === 'diagrams' && (
        <>
          <DiagramList />
          <DiagramForm />
        </>
      )}
      {activeTab === 'projects' && (
        <>
          <ProjectList />
          <ProjectForm />
        </>
      )}
    </div>
  );
}

export default App;