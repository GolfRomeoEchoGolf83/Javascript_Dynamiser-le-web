// TODO: écrire la fonction compterElements

/* Compter les éléments */

function compterElements(selecteur) {
    return document.querySelectorAll(selecteur).length;
}


console.log(compterElements("p")); // doit afficher 4
console.log(compterElements(".adjectif")); // doit afficher 3
console.log(compterElements("p .adjectif")); // doit afficher 3
console.log(compterElements("p > .adjectif")); // doit afficher 2