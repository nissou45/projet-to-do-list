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
