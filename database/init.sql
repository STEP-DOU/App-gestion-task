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
('Tâche 1', 'Description de la tâche 1', 'Haute', 'Valide'),
('Tâche 2', 'Description de la tâche 2', 'Moyenne', 'En Cours');
