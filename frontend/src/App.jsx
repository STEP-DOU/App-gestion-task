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
    <div className="App flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Router>
        <Navbar /> {/* Barre de navigation */}
        <main className="flex-grow p-4"> {/* Conteneur principal pour le contenu */}
          <Routes>
            <Route path="/" element={<Task />} />
            <Route path="/task-termine" element={<TaskTermine />} />
            <Route path="/task-pending" element={<TachePending />} />
            <Route path="/task-ferme" element={<TaskFerme />} />
          </Routes>
        </main>
        <Footer /> {/* Ajout du footer */}
      </Router>
    </div>
  );
};

export default App;
