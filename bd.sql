
CREATE TABLE IF NOT EXISTS Utilisateurs (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(30),
    prenom VARCHAR(30),
    courriel VARCHAR(255),
    cle_api VARCHAR(100),
    password VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS Taches (
    id SERIAL PRIMARY KEY,
    utilisateur_id INT,
    titre VARCHAR(100),
    
    description VARCHAR(500),
    
    date_debut DATE,
    date_echeance DATE,
    
    complete BOOLEAN,  
    FOREIGN KEY (utilisateur_id) REFERENCES Utilisateurs (id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Sous_taches (
    id SERIAL PRIMARY KEY,
    tache_id INT,
    titre VARCHAR(100),
    complete BOOLEAN,
    FOREIGN KEY (tache_id) REFERENCES Taches (id) ON DELETE CASCADE
);

INSERT INTO Utilisateurs (nom, prenom, courriel, cle_api, password) 
VALUES 
('test', 'test', 'test@test.com', 'test', 'test');

INSERT INTO Taches (utilisateur_id, titre, description, date_debut, date_echeance, complete) 
VALUES 
(1, 'tache', 'description', '2025-05-01', '2025-05-10', FALSE);

INSERT INTO Sous_taches (tache_id, titre, complete) 
VALUES 
(1, 'Sous tache 1', FALSE);

SELECT * FROM Utilisateurs;


