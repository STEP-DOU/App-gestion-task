const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const server = express();

// Configuration de la base de données avec les variables d'environnement
const db = mysql.createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "root123",
    database: process.env.DB_NAME || "gestion_tasks",
});

// Middleware
server.use(express.json());
server.use(cors());

// Route pour enregistrer une tache
server.post("/register", (req, res) => {
    const { name, description, priorite } = req.body;

    let sql = "INSERT INTO tasks (name, description, priorite) VALUES (?, ?, ?)";
    db.query(sql, [name, description, priorite], (err, result) => {
        if (err) {
            console.error("Erreur lors de l'insertion :", err);
            res.status(500).send(err);
        } else {
            res.status(200).send(result);
        }
    });
});
;

// Route pour obtenir tous les taches
server.get("/tasks", (req, res) => {
    let sql = "SELECT * FROM tasks";
    db.query(sql, (err, result) => {
        if (err) {
            console.error("Erreur lors de la récupération :", err);
            res.status(500).send(err);
        } else {
            res.status(200).send(result);
        }
    });
});

// Route pour les taches totales
server.get("/tasks-summary", (req, res) => {
    let sql = `
        SELECT 
            statut, 
            COUNT(*) as total 
        FROM tasks 
        GROUP BY statut
    `;
    db.query(sql, (err, result) => {
        if (err) {
            console.error("Erreur lors de la récupération des totaux :", err);
            res.status(500).send(err);
        } else {
            res.status(200).json(result);
        }
    });
});


// Route pour modifier une tache
server.put("/edit", (req, res) => {
    const { id, name, description, priorite, statut } = req.body;

    let sql = "UPDATE tasks SET name = ?, description = ?, priorite = ?, statut = ? WHERE idtasks = ?";
    db.query(sql, [name, description, priorite, statut, id], (err, result) => {
        if (err) {
            console.error("Erreur lors de la mise à jour :", err);
            res.status(500).send(err);
        } else {
            res.status(200).send(result);
        }
    });
});


// Route pour supprimer une tache
server.delete("/delete/:index", (req, res) => {
    const { index } = req.params;

    let sql = "DELETE FROM tasks WHERE idtasks = ?";
    db.query(sql, [index], (err, result) => {
        if (err) {
            console.error("Erreur lors de la suppression :", err);
            res.status(500).send(err);
        } else {
            res.status(200).send(result);
        }
    });
});



// Démarrage du serveur
server.listen(3001, () => {
    console.log("Le serveur tourne sur le port 3001");
});
