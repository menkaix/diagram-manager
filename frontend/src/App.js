import React from 'react';
import './App.css';
import DiagramList from './components/DiagramList';
import DiagramForm from './components/DiagramForm';
import ProjectList from './components/ProjectList';
import ProjectForm from './components/ProjectForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bienvenue dans le Gestionnaire de Diagrammes UML</h1>
        <p>
          Gérez vos diagrammes UML pour vos projets informatiques.
        </p>
      </header>
      <DiagramList />
      <DiagramForm />
      <ProjectList />
      <ProjectForm />
    </div>
  );
}

export default App;