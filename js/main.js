/**
 * @author Steve Fallet
 * @since 2022.09.06
 */

'use strict';
/********************************
 CHANGEMENT ARRIERE-PLAN
 ********************************/

// Récupération du <body>
const body = document.querySelector('body');
const listeBg = document.querySelector('#bg');
console.log(body, listeBg);
// Change l'arrière-plan
body.style.backgroundImage = `url(./img/backgrounds/${ listeBg.value })`;
// Ecoute l'événement "change" sur la liste déroulante
listeBg.addEventListener('change', function () {
  body.style.backgroundImage = `url(./img/backgrounds/${ listeBg.value })`;
});

/********************************
 ENVOI DU FORMULAIRE
 ********************************/

// Récupération du formulaire et des champs mot-de-passe
const formulaire = document.querySelector('form');
const txtPassword = document.querySelector('#pass');
const txtPasswordConfirm = document.querySelector('#confirm');

// Ecouter l'envoi du formulaire (submit)
formulaire.addEventListener('submit', function (event) {
  // Stopper l'envoi ou annuler événement
  event.preventDefault();
  // Si mot de passe plus petit que 3 caratères
  if (txtPassword.value.length < 3) {
    alert('Le mot de passe doit avoir au minimum 3 caractères !');
    return; // Termine la fonction
  }
  // Si mot de passe et confirmation sont différents
  if (txtPassword.value !== txtPasswordConfirm.value) {
    alert('Mots de passes différents !');
    return; // Termine la fonction
  }
  // Informe l'utilisateur
  alert('Compte créé avec succès !');
  formulaire.submit(); // Envoi le formulaire
});
