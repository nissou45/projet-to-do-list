const addbutton = document.querySelector("button");
const champTache = document.querySelector("input");
const listeTaches = document.querySelector("ul");

addbutton.addEventListener("click", function (event) {
	event.preventDefault();
	const li = document.createElement("li"); // création du <li>
	li.textContent = "Faire une sieste"; //remplir le contenu du nouvel <li>
	listeTaches.appendChild(li);
});
