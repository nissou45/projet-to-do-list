const addbutton = document.querySelector("button");
const champTache = document.querySelector("input");
const listeTaches = document.querySelector("ul");

// Sélectionne tous les boutons "supprimer"
const btn_delete = document.querySelectorAll("li>button");

//on cree un function pour supprimer un element
function supprimer_element(element) {
	element.remove();
}

addbutton.addEventListener("click", function (event) {
	event.preventDefault();
	const li = document.createElement("li"); // création du <li>
	li.textContent = "Faire une sieste"; //remplir le contenu du nouvel <li>
	listeTaches.appendChild(li);
});

//on creer une boucle for sur tous les boutons
for (const btn of btn_delete) {
	btn.addEventListener("click", function (event) {
		const element_de_liste = event.target.parentNode; // le <li> parent
		supprimer_element(element_de_liste); // supprime m'element
	});
}
