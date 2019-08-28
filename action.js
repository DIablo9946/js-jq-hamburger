// *NOME REPO=* js-jq-hamburger
// *DESCRIZIONE=*
// Creare un hamburger menu con l’utilizzo di Html, Css e JavaScript.
// https://bitbucket.org/booleancareers/ex-hamburger-menu-base
//
// *NOTE=*
// fate il download da bitbucket facendo attenzione
// che non vi porti dietro le info di Git,
// sennò come la volta scorsa ripuliamo la nostra cartella
//  locale prima da .git e poi ri-inizzializziamo
// il repo e lo colleghiamo al nostro creato su Github.

$( document ).ready(function() {

var burMen = $(".fas.fa-bars");

burMen.click(function() {
  $(".header-right ul").show();
  console.log("ciao");
});






});
