CREATE DATABASE IF NOT EXISTS gestion_tasks;
USE gestion_tasks;


CREATE TABLE IF NOT EXISTS tasks (
    idtasks INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    priorite VARCHAR(255) NOT NULL
    statut VARCHAR(255),
);

INSERT INTO tasks (name, description, priorite) VALUES
('basket', 'rien', 'Sports'),
('PS4','rien', 'Jeux Video');