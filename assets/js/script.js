// alert("js est activé !");

// ----------- PULL ----------

let color = document.querySelectorAll(".colorBox");
let divPull = document.querySelector("#divPull");

// console.log(pull);
// console.log(color);
// console.log(color[0]);

//fonction pour changer l'image dans la divPull, qui prend en paramètre imagesrc qui est l'attribut scr afin de le changer après
function changeImage(imageSrc) {
  divPull.innerHTML = ""; // je vide l'intérieur de la div qui prend l'image
  let img = document.createElement("img"); // je craie un element img
  img.src = imageSrc; // l'attribution d'attribut src qui reçoit le paramètre (variable)
  divPull.appendChild(img); // on append (accroche) l'image à son parent divPull
  divPull.style.transition = "all 0.5s ease-in-out"; // ceci est une transition
}

//Application de l'écouteur d'évenement pour chaqu'une de la box couleur

for (let i = 0; i < color.length; i++) {
  color[i].addEventListener("click", function (event) {
    //changement du chemin de l'image

    let imageSrc = "assets/img/img-" + (i + 1) + ".png";
    //Appel de la fonction changeImage pour insérer une nouvelle image
    changeImage(imageSrc);
  });

  //  écouteur d'événements mousedown
  color[i].addEventListener("mousedown", () => {
    color[i].style.backgroundColor = "white";
    color[i].style.borderColor = "black";
  });

  let colored = color[i].style.backgroundColor;
  //   console.log(colored);

  //ecouteur d'evenement mouseup
  color[i].addEventListener("mouseup", () => {
    color[i].style.backgroundColor = colored;
    color[i].style.borderColor = colored;
  });
}

// -------------------- validation du formulaire ------------------------------

let form = document.querySelector("form");
// console.log(form);
let inputNom = document.querySelector("#nom");
// console.log(nom);
let inputPrenom = document.querySelector("#prenom");
// console.log(inputPrenom);

let inputEmail = document.querySelector("#email");
// console.log(inputEmail);

let passw = document.querySelector("#pw");
// console.log(passw);

div = document.querySelectorAll("#div");
// console.log(document.querySelectorAll("#div"));

// ------------------- les fonctions ----------------------

// function onlyLetters(chaine) {
//   let regex = /^[a-zA-Z]*$/; // expression régulière pour vérifier si la chaîne ne contient que des lettres
//   // ^ : début de la chaîne
//   // [a-zA-Z] : correspond à une lettre majuscule ou minuscule
//   // * : correspond à zéro ou plusieurs occurrences de la lettre
//   // $ : fin de la chaîne
//   return !regex.test(chaine); // test() renvoie true si la chaîne correspond à l'expression régulière, sinon false
// }

//fonction message d'erreur
function messageErreur(erreur, elementAccrchage) {
  let p = document.createElement("p");
  p.textContent = "Le champ " + erreur + " n'est pas valide";
  //ajout de la classe
  p.setAttribute("class", "text-danger");
  p.classList.add(
    "border",
    "border-danger",
    "bg-danger-subtle",
    "p-3",
    "rounded-2"
  );
  elementAccrchage.append(p); //
}
//---------------------------------------------------------------
//--------------- Soumission du formulaire ----------------------
//---------------------------------------------------------------

form.addEventListener("submit", function (event) {
  event.preventDefault();

  //création de variables qui stocke la valeur des inputs
  let vPrenom = inputPrenom.value.trim();
  // console.log(vPrenom);
  let vNom = inputNom.value.trim();
  // console.log(vNom);
  let vEmail = inputEmail.value.trim();
  let vPassw = passw.value.trim();

  //-------------- regex ------------------
  let regexLetter = /^[a-zA-Z]*$/; // expression régulière pour vérifier si la chaîne ne contient que des lettres
  // ^ : début de la chaîne
  // [a-zA-Z] : correspond à une lettre majuscule ou minuscule
  // * : correspond à zéro ou plusieurs occurrences de la lettre
  // $ : fin de la chaîne
  let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  // regex mot de passe
  let regexPassword = /^[a-zA-Z0-9]{8,20}$/;
  // ^ : début de la chaîne
  // [a-zA-Z0-9] : correspond à une lettre majuscule ou minuscule ou un chiffre
  // {8,20} : correspond à une longueur de 8 à 20 caractères
  // $ : fin de la chaîne
  let erreur = false;

  //on teste le prénom
  if (vPrenom.length < 2 || vPrenom.length > 15 || !regexLetter.test(vPrenom)) {
    //fonction message erreur
    messageErreur("prenom", div[1]);
    erreur = true;
  } else {
    inputPrenom.classList.add("border", "border-2", "border-success");
  }

  //on teste le nom
  if (vNom.length < 2 || vNom.length > 15 || !regexLetter.test(vNom)) {
    messageErreur("nom", div[0]);
    erreur = true;
  } else {
    inputNom.classList.add("border", "border-2", "border-success");
  }

  //on teste l'email
  if (!regexEmail.test(vEmail)) {
    messageErreur("Email", div[2]);
    erreur = true;
  } else {
    inputEmail.classList.add("border", "border-2", "border-success");
  }

  //tester le mot de passe
  if (!regexPassword.test(vPassw)) {
    messageErreur("mot de passe", div[3]);
    erreur = true;
  } else {
    passw.classList.add("border", "border-2", "border-success");
  }

  // Je vérifie si il n'y a pas d'erreur, auquel cas je fais apparaître une alert de succès
  if (!erreur) {
    let donnee = document.querySelectorAll(".donnee");

    alert("Formulaire envoyé avec succès !");

    // Je fais apparaître les données de l'utilisateur dans le tableau

    donnee[0].textContent = `Nom : ${vNom}`;
    donnee[1].textContent = `Prenom : ${vPrenom}`;
    donnee[2].textContent = `Email : ${vEmail}`;
  }
});
