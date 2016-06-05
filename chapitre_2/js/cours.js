// SELECTIONNER DES ELEMENTS :

/* sélectionner le premier titre h2 du document 
méthode 1 (pour l'exemple) */

console.log(document.body.childNodes[5].childNodes[1]);

// méthode 2
var titresElts = document.getElementsByTagName("h2"); // tous les titres h2
console.log(titresElts[0]); // affiche le premier titre h2
console.log(titresElts.length); // affiche 3

/* Le titre sélectionné est le premier élément de la liste renvoyée à l'appel de la méthode getElementsByTagName
On vérifie aussi que la liste contient 3 éléments */


/* Sélectionner et afficher les éléments du document ayant pour classe "merveilles" */
var merveillesElts = document.getElementsByClassName("merveilles");
for (var i = 0; i < merveillesElts.length; i++) {
    console.log(merveillesElts[i]);
}

/* Sélectionner et afficher les éléments du document ayant pour classe "nouvelles" */
console.log(document.getElementById("nouvelles"));

/* 
-------------------------------------------------
Sélection par sélecteur CSS 
querySelectorAll et querySelector

Tous les paragraphes */
console.log(document.querySelectorAll("p").length); // Affiche 3

// Tous les paragraphes à l'intérieur de l'élément identifié par "contenu"
console.log(document.querySelectorAll("#contenu p").length); // Affiche 2

// Tous les éléments ayant la classe "existe"
console.log(document.querySelectorAll(".existe").length); // Affiche 8

// Tous les éléments fils de l'élément identifié par "antiques" ayant la classe "existe"
console.log(document.querySelectorAll("#antiques > .existe").length); // Affiche 1

// Le premier paragraphe
console.log(document.querySelector("p"));


// OBTENIR DES INFORMATIONS SUR LES ELEMENTS :

// contenu HTML de l'élément identifié par "contenu"
console.log(document.getElementById("contenu").innerHTML);

// contenu textuel de l'élément idenfifié par "contenu
console.log(document.getElementById("contenu").textContent);

// attribut href du premier lien
console.log(document.querySelector("a").getAttribute("href"));


// id, href et value sont accessibles sous forme de propriété
// identifiant de la première liste
console.log(document.querySelector("ul").id);

// attribut href du premier lien
console.log(document.querySelector("a").href);

// vérifier la présence d'un attribut sur un élément 
if (document.querySelector("a").hasAttribute("target")) {
    console.log("Le premier lien possède l'attribut target");
} else {
    console.log("Le premier lien ne possède pas l'attribut target");
}


// récupérer les classes d'un élément du DOM
// liste des classes de l'élément identifié par "antique"
var classes = document.getElementById("antiques").classList;
console.log(classes.length); // affiche 1 = possède 1 classe
console.log(classes[0]); // affiche "merveilles"

// tester la présence d'une classe dans un élément
if (document.getElementById("antiques").classList.contains("merveille")) {
    console.log("L'élément identifié par antiques possède la classe merveille");
} else {
    console.log("L'élément identifié par antiques ne possède pas la classe merveille");
}