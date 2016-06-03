/* Exercice : afficher l'enfant d'un objet du DOM */

// PARAMETRES :
// Affiche un enfant d'un objet du DOM
// Le paramètre noed est l'objet du DOM
// Le paramètre indice est l'indicie de l'enfant à afficher
function afficherEnfant(noeud, indice) {
    // todo : compléter la fonction
}


// PARAMETRE :
// Afficher le noeud h1
afficherEnfant(document.body, 1);

// PARAMETRE :
// Afficher l'erreur "indice incorrect"
// Indice négatif
afficherEnfant(document.body, -1);

// Afficher l'erreur "indice incorrect"
// Noeud body a moisn de 9 noeuds enfants
afficherEnfant(document.body, 8);

// Afficher l'erreur "type de noeud incorrect"
// Premier noeud enfant de body est textuel et n'a pas d'enfant
afficherEnfant(document.body.childNodes[0], 0);