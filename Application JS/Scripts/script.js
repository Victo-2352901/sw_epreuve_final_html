// SECTION CRÉATION UTILISATEUR
let inputPrenom = document.getElementById("prenom");
let inputNom = document.getElementById("nom");
let inputCourriel = document.getElementById("courriel");
let inputMDP = document.getElementById("mot_de_passe");
let boutonCreation = document.getElementById("creer-utilisateur");

// SECTION RECUPÉRATION API
let inputCourrielRecuperation = document.getElementById("courriel_recuperation");
let inputMDPRecuperation = document.getElementById("mot_de_passe_recuperation");
let inputCheckbox = document.getElementById("checkbox-generer");
let boutonRecuperation = document.getElementById("bouton-recuperer");
let generer = "";

// Section évenement bouton
boutonCreation.addEventListener("click", creerUsager);
boutonRecuperation.addEventListener("click", recupererCle);

function creerUsager(){
    if(inputPrenom.value != "" && inputNom.value != "" && inputCourriel.value != "" && inputMDP.value != ""){
    

        console.log("Prénom :", inputPrenom.value);
        console.log("Nom :", inputNom.value);
        console.log("Courriel :", inputCourriel.value);
        console.log("Mot de passe :", inputMDP.value);

        // Variable pour l'url
        url = "http://localhost:3000/api/utilisateurs/ajout";

        const options = {
            method: "POST",
            headers: {          
                "content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    "prenom": inputPrenom.value,
                    "nom": inputNom.value,
                    "courriel": inputCourriel.value,
                    "mot_de_passe": inputMDP.value
                })
        } // Fin options

        fetch(url, options)
        .then(response => response.json())
        .then(data => {
            alert(data.message)
        })
        .catch(error => console.error("Erreur lors de la création de l'utilisateur : ", error));
    }
    else{
        alert('Les champs "prenom","nom","courriel" et "mot de passe" sont obligatoire pour créer un utilisateur');
    }
}

function recupererCle(){
    if(inputCourrielRecuperation.value != "" && inputMDPRecuperation != ""){

        // Variable pour l'url
        url = "http://localhost:3000/api/utilisateurs/recupererCleApi";

        if(inputCheckbox.checked == true){
            generer = "Nouveau";
        }
        else{
            generer = "";
        }

        const options = {
            method: "POST",
            headers: {          
                "content-Type": "application/json",
                "courriel": inputCourriel.value,
                "mot_de_passe": inputMDP.value,
                "generer": generer,
            }
        } // Fin options

        fetch(url, options)
        .then(response => response.json())
        .then(data => {
            alert("Yeah");
        })
        .catch(error => console.error("Erreur lors de la récupération de la clé d'api : ", error));
    }
    else{
        alert('Les champs "courriel" et "mot de passe" sont obligatoire pour créer un utilisateur');
    }
}