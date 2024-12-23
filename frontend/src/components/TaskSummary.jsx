import React, { useState, useEffect } from "react";
import axios from "axios";

const TaskSummary = () => {
  const [summary, setSummary] = useState([]);

  // Charger les totaux depuis l'API
  useEffect(() => {
    axios
      .get("http://localhost:3001/tasks-summary") // Remplacez par l'URL correcte
      .then((response) => {
        setSummary(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des totaux :", error);
      });
  }, []);

  // Trouver les totaux par statut
  const totalValide = summary.find((item) => item.statut === "Valide")?.total || 0;
  const totalClose = summary.find((item) => item.statut === "Close")?.total || 0;
  const totalEnCours = summary.find((item) => item.statut === "En Cours")?.total || 0;
  const totalTasks = totalValide + totalClose + totalEnCours;

  return (
    <div className="flex gap-8 justify-center">
      {/* Toutes les tâches */}
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h4 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
          Total de toutes les tâches
        </h4>
        <p className="mb-3 text-center text-5xl font-normal text-gray-700 dark:text-gray-400">
          {totalTasks}
        </p>
      </div>

      {/* Tâches Valide */}
      <div className="max-w-sm p-6 bg-green-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h4 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
        Toutes les tâches Validées
        </h4>
        <p className="mb-3 text-center text-5xl font-normal text-gray-700 dark:text-gray-400">
          {totalValide}
        </p>
      </div>

      {/* Tâches En Cours */}
      <div className="max-w-sm p-6 bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h4 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
        Toutes les tâches En Cours
        </h4>
        <p className="mb-3 font-normal text-center text-5xl text-gray-700 dark:text-gray-400">
          {totalEnCours}
        </p>
      </div>

      {/* Tâches Close */}
      <div className="max-w-sm p-6 bg-red-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h4 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
        Toutes les tâches Close
        </h4>
        <p className="mb-3 text-center text-5xl font-normal text-gray-700 dark:text-gray-400">
          {totalClose}
        </p>
      </div>
    </div>
  );
};

export default TaskSummary;
