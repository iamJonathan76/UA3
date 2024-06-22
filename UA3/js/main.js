//On declare nos variables en les recuperant par leurs id

let nom = document.getElementById("nom");
let email = document.getElementById("courriel");
let noDeTelephone = document.getElementById("telephone");
let nbrdePlace = document.getElementById("choix");
let commentaire = document.getElementById("commentaires");
let modal = document.getElementById("monModal");
let acheterBtn = document.getElementById("acheterBtn");
let fermeModalBtn = document.getElementById("fermeModalBtn");




// Ajouter un listener sur le bouton submit
acheterBtn.addEventListener("click", function (event) {

  // On empêche le comportement par défaut du formulaire et on lui donne les fonctions qu'il va desormais executer
  event.preventDefault();

  //on ajoute une condition que le bouton doit remplir avant d'afficher le modal, il doit d'abord s'assurer que verifierformulaire
  // a été valider puis executer la fonction prendreDonner et mettre le modale sous display block
  if (verifierFormulaire()) {
    prendreDonner();

    // Afficher le modal
    modal.style.display = "block";
  }
});


// Ajouter un écouteur d'événements sur le bouton de fermeture du modal
fermeModalBtn.addEventListener("click", function () {
  // Cacher le modal
  modal.style.display = "none";
});


//fonction permettant des recuperer les données de l'utilisateur et les affichés dans le modal
function prendreDonner() {

  //on declare nos variables civilité et genre mais qui va uniquement prendre en compte les elements qui sont cochés
  let civilite = document.querySelector('input[name="civilite"]:checked');
  let genre = document.querySelectorAll('input[name="genre"]:checked');

  // On crée un tableau vide dans lequel on va stocker les éléments qui sont dans genre
  let genreChoix = [];

  //on crée une boucle afin de parcourir tout les elements de genre qui sont séléctionnés
  for (let i = 0; i < genre.length; i++) {
    //ici on recupere la valeur de I et on l'ajoute dans le tableau genreChoix
    genreChoix.push(genre[i].value);
  }

  document.getElementById("paragraphe").innerHTML =
    "Nom: " +
    nom.value +
    "<br>" +
    "Courriel: " +
    email.value +
    "<br>" +
    "Telephone: " +
    noDeTelephone.value +
    "<br>" +
    "Commentaire: " +
    commentaire.value +
    "<br>" +
    "Nbre Place: " +
    nbrdePlace.value +
    "<br>" +
    "Genre: " +
    genreChoix.join(", ") +
    "<br>" +
    "Civilite: " +
    civilite.value;
}

//fonction pour valider le formulaire
function verifierFormulaire() {

  //on declare des variables qui vont prendre les valeurs de ce que l'utilisateur va entrer dans les champs
  let nomComplet = nom.value;
  let numTelephone = noDeTelephone.value;
  let emailAdresse = email.value;
  let commentaires = commentaire.value;
  let genre = document.querySelectorAll('input[name="genre"]:checked');
  let civilite = document.querySelector('input[name="civilite"]:checked');

  let nom_erreur = document.getElementById("nom_erreur");
  let email_erreur = document.getElementById("email_erreur");
  let numero_erreur = document.getElementById("numero_erreur");
  let comments_erreur = document.getElementById("comments_erreur");
  let civilite_erreur = document.getElementById('civilite_erreur');
  let genre_erreur = document.getElementById('genre_erreur')



  let email_verifier = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
  let num_verifier = /^\+\d{1}\(\d{3}\) \d{3}-\d{4}$/;



  let genreChoix = [];
  for (let i = 0; i < genre.length; i++) {
    //ici on recupere la valeur de I et on l'ajoute dans le tableau genreChoix
    genreChoix.push(genre[i].value);
  }



  //message d'erreur en cas de non selection de civilite
  if(!civilite){
    civilite_erreur .innerHTML = 'Selectionner votre civilite'
  }else{
    civilite_erreur .innerHTML = ''
  }



  //message d'erreur en cas de non selection de genre
  if(genreChoix.length === 0){
    genre_erreur.innerHTML = 'Selectionnez un genre'
  }else{
    genre_erreur.innerHTML = ''
  }



  // Validation du nom
  if (nomComplet === "" || nomComplet == null) {
    nom_erreur .innerHTML = "Veuillez remplir ce champ";
  } else {
    nom_erreur .innerHTML = "";
  }



  // Validation de l'email
  if (emailAdresse === "" || emailAdresse == null) {
    email_erreur.innerHTML = "Veuillez remplir ce champ";
  } else if (!emailAdresse.match(email_verifier)) {
    email_erreur.innerHTML =
      "Entrez un email valide au format exemple@gmail.com";
  } else {
    email_erreur.innerHTML = "";
  }

   // Validation du numero de telephone
  if (numTelephone === "" || numTelephone == null) {
    numero_erreur.innerHTML = "Veuillez remplir ce champ";
  } else if (!numTelephone.match(num_verifier)) {
    numero_erreur.innerHTML =
      "Entrez un numéro de téléphone valide au format +1(xxx) xxx-xxxx";
  } else {
    numero_erreur.innerHTML = "";
  }


   // Validation de le commentaires
  if (commentaires === "" || commentaires == null) {
    comments_erreur.innerHTML = "Veuillez taper un commentaire";
  } else {
    comments_erreur.innerHTML = "";
  }



//validation final
  if (
    nomComplet !== "" &&
    emailAdresse !== "" &&
    emailAdresse.match(email_verifier) &&
    numTelephone !== "" &&
    numTelephone.match(num_verifier) &&
    commentaires !== "" &&
    genreChoix.length > 0
  ) {
   
    return true;
  } else {
    return false;
  }
}
