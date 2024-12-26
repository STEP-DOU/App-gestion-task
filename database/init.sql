CREATE DATABASE IF NOT EXISTS gestion_tasks;
USE gestion_tasks;


CREATE TABLE IF NOT EXISTS tasks (
    idtasks INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    priorite VARCHAR(255) NOT NULL,
    statut VARCHAR(255) DEFAULT 'En Cours'
);

INSERT INTO tasks (name, description, priorite, statut) VALUES
('Tache 1', 'Description de la tache 1', 'Haute', 'Valide'),
('Tache 2', 'Description de la tache 2', 'Moyenne', 'En Cours');
