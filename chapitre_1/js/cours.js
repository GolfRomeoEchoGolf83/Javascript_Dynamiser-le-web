var h = document.head; // la variable h contient l'objet head du DOM
console.log(h);

var b = document.body; // la variable b contient l'objet body du DOM
console.log(b);


// vérification du noeud body
if (document.body.nodeType === document.ELEMENT_NODE) {
    console.log("Body est un noeud élément");
} else {
    console.log("Body est un noeud textuel");
} //affiche "body est un noeud élément"

// accès au premier enfant du noeud body
console.log(document.body.childNodes[0]);
console.log(document.body.childNodes[1]);

// affiche les noeuds enfant du noeud body
for (var i = 0; i < document.body.childNodes.length; i++) {
    console.log(document.body.childNodes[i]);
}

// affiche le parent du noeud
var h1 = document.body.childNodes[1];
console.log(h1.parentNode); //affiche le noeud body
console.log(document.parentNode); // affiche null : le noeuf n'a aucun noeud parent