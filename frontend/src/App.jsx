import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TaskTermine from './components/TaskTermine';
import TaskFerme from './components/TaskFerme';
import TachePending from './components/TachePending';
import Task from './Task';

const App = () => {
  return (
    <div>
       <Router>
        <Navbar/>
            <Routes>
                <Route path="/" element={<Task />} />
                <Route path="/task-termine" element={<TaskTermine />} />
                <Route path="/task-pending" element={<TachePending />} />
                <Route path="/task-ferme" element={<TaskFerme />} />
            </Routes>
      </Router>
    </div>
  )
}

export default App
