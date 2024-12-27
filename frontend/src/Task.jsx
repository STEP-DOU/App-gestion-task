import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import des animations
import "./App.css";
import Axios from "axios";
import Card from "./components/card";
import TaskSummary from "./components/TaskSummary";

function Task() {
  const baseUrl = "http://localhost:3001";

  const [values, setValues] = useState();
  const [tasks, settasks] = useState();

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickButton = () => {
    Axios.post(`${baseUrl}/register`, {
      name: values.name,
      description: values.description,
      priorite: values.priorite,
    }).then((response) => {
      console.log(response);
      // Ajouter une animation lors de la création
      settasks((prevTasks) => [
        ...prevTasks,
        {
          idtasks: Date.now(), // ID temporaire
          name: values.name,
          description: values.description,
          priorite: values.priorite,
          statut: "En Cours",
        },
      ]);
    });
  };

  useEffect(() => {
    Axios.get(`${baseUrl}/tasks`).then((response) => {
      settasks(response.data);
    });
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h1 className="title"></h1>

        {/* -------------------------- Cart des nombres totaux des tâches (statistiques) */}
        <TaskSummary />

        {/* --------------------Input des tâches------------------- */}
        <div className="register-box">
          <input
            className="register-input"
            type="text"
            name="name"
            placeholder="Title"
            onChange={handleChangeValues}
          />
          <input
            className="register-input"
            type="text"
            name="description"
            placeholder="Description"
            onChange={handleChangeValues}
          />
          <select
            className="register-inp"
            name="priorite"
            onChange={handleChangeValues}
            defaultValue=""
          >
            <option value="" disabled>
              Choisissez une priorité
            </option>
            <option value="Haute">Haute</option>
            <option value="Moyenne">Moyenne</option>
            <option value="Basse">Basse</option>
          </select>
          <button className="register-button" onClick={handleClickButton}>
            Ajouter une Tâches
          </button>
        </div>
        <br />

        {/* Liste des tâches avec animation */}
        <div className="cards">
          <AnimatePresence>
            {typeof tasks !== "undefined" &&
              tasks.map((task) => {
                return (
                  <motion.div
                    key={task.idtasks}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card
                      id={task.idtasks}
                      name={task.name}
                      description={task.description}
                      priorite={task.priorite}
                      statut={task.statut}
                    />
                  </motion.div>
                );
              })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Task;
