// Fonction pour récupérer et afficher la citation dans la console
function citation() {
  // Récupération du contenu de l'élément ayant comme id "citation"
  var citationText = document.getElementById("citation").innerText;
  // Affichage du contenu dans la console
  console.log(citationText);
}

// Événement de clic sur le bouton "button" pour appeler la fonction citation
document.getElementById("button").addEventListener("click", citation);
