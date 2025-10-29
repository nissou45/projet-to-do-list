// Sélectionne tous les boutons "supprimer"
const btn_delete = document.querySelectorAll("li>button");

//on cree un function pour supprimer un element
function supprimer_element(element) {
  element.remove();
}

//on creer une boucle for sur tous les boutons
for (const btn of btn_delete) {
  btn.addEventListener("click", function (event) {
    const element_de_liste = event.target.parentNode; // le <li> parent
    supprimer_element(element_de_liste); // supprime m'element
  });
}

// on recupere toute les balises li de la page
const items = document.querySelectorAll("li");

// on cree une boucle, pour chaque li on ajoute un event
for (const li of items) {
  // Quand on clique sur une tâche, elle devient "complétée"
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });
}
