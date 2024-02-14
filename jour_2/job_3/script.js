var compteur = 0; // Initialise le compteur à 0

const button = document.getElementById("button");
const compteurElement = document.getElementById("compteur");

function addone() {
  compteur = compteur + 1; // Incrémente le compteur de 1
  compteurElement.textContent = compteur; // Affiche le nouveau compteur
}

button.addEventListener("click", addone);
