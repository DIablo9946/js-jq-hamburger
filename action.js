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
var closeMen = $(".close");

burMen.click(function() {
  $(".hamburger-menu").addClass("active");
  console.log("ciao");
});

closeMen.click(function() {
$(".hamburger-menu").removeClass("active");
});
});
