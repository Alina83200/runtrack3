/*Créez une fonction “jourtravaille” qui prend en paramètre une date au format Date. Si la
date correspond à un jour férié de l’année 2020, la fonction affiche “Le $jour $mois
$année est un jour férié”. Si elle correspond à un samedi ou un dimanche, alors le
message affiché est “Non, $jour $mois $année est un week-end”, sinon afficher “Oui,
$jour $mois $année est un jour travaillé”.

$jour correspond au numéro du jour, $mois au mois et $année à l’année. Les jours fériés
sont référencés sur
*/
function jourTravaille(date) {
  var jour = date.getDate();
  var mois = date.getMonth() + 1;
  var annee = date.getFullYear();
  var jourFerie = [
    "01/01",
    "13/04",
    "01/05",
    "08/05",
    "21/05",
    "01/06",
    "14/07",
    "15/08",
    "01/11",
    "11/11",
    "25/12",
  ];
  if (
    jourFerie.includes(`${jour}/${mois}`) ||
    date.getDay() === 0 ||
    date.getDay() === 6
  ) {
    console.log(
      `Non, ${jour} ${mois} ${annee} est un jour férié ou un week-end.`
    );
  } else {
    console.log(`Oui, ${jour} ${mois} ${annee} est un jour travaillé.`);
  }
}
var dateTest = new Date(2020, 0, 1); // 1er Janvier 2020
jourTravaille(dateTest);