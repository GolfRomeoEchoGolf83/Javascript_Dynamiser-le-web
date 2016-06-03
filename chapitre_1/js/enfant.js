/* Exercice : afficher l'enfant d'un objet du DOM */

// PARAMETRES :
// Affiche un enfant d'un objet du DOM
// Le paramètre noeud est l'objet du DOM
// Le paramètre indice est l'indice de l'enfant à afficher

// todo : compléter la fonction
function afficherEnfant(noeud, indice) {
    if (noeud.nodeType === document.ELEMENT_NODE) {
        if ((indice >= 0) && (indice < noeud.childNodes.length)) {
            console.log(noeud.childNodes[indice]);
        } else {
            console.error("Indice incorrect");
        }
    } else {
        console.error("Type de noeuf incorrect");
    }
}




// PARAMETRE :
// Afficher le noeud h1
afficherEnfant(document.body, 1);

// PARAMETRE :
// Afficher l'erreur "indice incorrect"
// Indice négatif
afficherEnfant(document.body, -1);

// Afficher l'erreur "indice incorrect"
// Noeud body a moins de 9 noeuds enfants
afficherEnfant(document.body, 8);

// Afficher l'erreur "type de noeud incorrect"
// Premier noeud enfant de body est textuel et n'a pas d'enfant
afficherEnfant(document.body.childNodes[0], 0);


/* Compléter la fonction afficherEnfant pour obtenir :

h1 
Indice incorrect
Indice incorrect
Type de noeud incorrect

*/