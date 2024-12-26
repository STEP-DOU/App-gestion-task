import React, { useState } from "react";
import "./card.css";
import FormDialog from "./dialog/dialog";
import FormDialogo from "./dialog/dialo";
import axios from "axios";

const Badge = ({ label, color }) => (
  <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${color}`}>
    {label}
  </span>
);

const Card = ({ id, name, description, priorite, statut }) => {
  const [dialogType, setDialogType] = useState(null);

  const handleOpenDialog = (type) => setDialogType(type);
  const handleCloseDialog = () => setDialogType(null);

  const handleDeleteGame = async () => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cette tâche ?")) {
      try {
        await axios.delete(`http://localhost:3001/delete/${id}`);
        alert("Tâche supprimée avec succès !");
      } catch (error) {
        alert("Erreur lors de la suppression de la tâche.");
      }
    }
  };

  const statusColors = {
    Valide: "bg-green-200 text-green-800",
    Close: "bg-red-200 text-red-800",
    "En Cours": "bg-gray-200 text-gray-800",
  };

  const priorityColors = {
    Basse: "bg-pink-200 text-gray-900",
    Moyenne: "bg-blue-200 text-gray-800",
    Haute: "bg-yellow-200 text-red-800",
  };

  return (
    <>
      {dialogType === "edit" && (
        <FormDialog
          open={dialogType === "edit"}
          setOpen={handleCloseDialog}
          id={id}
          name={name}
          description={description}
          priorite={priorite}
          statut={statut}
        />
      )}
      {dialogType === "actions" && (
        <FormDialogo
          open={dialogType === "actions"}
          setOpen={handleCloseDialog}
          id={id}
          name={name}
          description={description}
          priorite={priorite}
          statut={statut}
        />
      )}
      <div className="game-card">
        <div className="info">
          <h4>{name}</h4>
          <p>{description}</p>
          <div className="flex gap-8">
            <p className="flex gap-1">
              Priorité : <Badge label={priorite} color={priorityColors[priorite]} />
            </p>
            <p className="flex gap-1">
              Statut : <Badge label={statut} color={statusColors[statut]} />
            </p>
          </div>
        </div>
        <div className="actions flex">
          <button
            className="action flex gap-3"
            onClick={() => handleOpenDialog("actions")}
            aria-label="Voir les actions"
          >
            Actions
          </button>
          <button className="edit" onClick={() => handleOpenDialog("edit")}>
            Edit
          </button>
          <button className="delete" onClick={handleDeleteGame}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
