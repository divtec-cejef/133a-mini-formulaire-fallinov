/**
 * @author Steve Fallet
 * @since 2022.09.06
 */

'use strict';

/*****************************************
 CHANGEMENT D'IMAGE D'ARRIÈRE-PLAN
 *****************************************/

// Récupération du <body>
const body = document.querySelector('body');
// Récupération de la liste déroulante
const listeBackground = document.querySelector('#bg');

// Charge l'image par défaut
body.style.backgroundImage = `url(./img/backgrounds/${listeBackground.value})`;
// Ecouter un événement de type "change" (changer de valeur)
// sur la liste déroulante
listeBackground.addEventListener('change', function () {
  body.style.backgroundImage = `url(./img/backgrounds/${listeBackground.value})`;
  // body.style.backgroundImage = 'url(./img/backgrounds/' +' +' listeBackground.value + ')'
});

/*****************************************
 ENVOI DU FORMULAIRE
*****************************************/

// Récupération du formulaire
const formulaire = document.querySelector('form');
// Récupération des champs de saisie pour le mot de passe
const txtMdp = document.querySelector('#mot-de-passe');
const txtConfirmMdp = document.querySelector('#confirmation');
const btCreerCompte = document.querySelector('button[type="submit"]');
console.log(txtMdp, txtConfirmMdp, btCreerCompte);
// Ecouter un événement de type "submit" (envoi du formulaire)
formulaire.addEventListener('submit', function (event) {
   // Stoppe l'événement par défaut (envoi du formulaire)
  event.preventDefault();
  // Si les mots de passe ne correspondent pas
  if (txtMdp.value.length < 3 || txtMdp.value !== txtConfirmMdp.value) {
    alert('Les mots de passe ne correspondent pas !');
    return; // Arrête la fonction
  }
  alert('Compte créé avec succès !');
  btCreerCompte.classList.add('animate__heartBeat');
  // Envoye le formulaire
  formulaire.submit();
});
