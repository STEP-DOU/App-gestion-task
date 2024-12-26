import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import de la barre de navigation
import Footer from './components/Footer'; // Import du footer
import TaskTermine from './components/TaskTermine';
import TaskFerme from './components/TaskFerme';
import TachePending from './components/TachePending';
import Task from './Task';

const App = () => {
  return (
    <div className="App" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Router>
        <Navbar /> {/* Barre de navigation */}
        <div style={{ flex: 1 }}> {/* Conteneur pour pousser le footer en bas */}
          <Routes>
            <Route path="/" element={<Task />} />
            <Route path="/task-termine" element={<TaskTermine />} />
            <Route path="/task-pending" element={<TachePending />} />
            <Route path="/task-ferme" element={<TaskFerme />} />
          </Routes>
        </div>
        <Footer /> {/* Ajout du footer */}
      </Router>
    </div>
  );
};

export default App;
