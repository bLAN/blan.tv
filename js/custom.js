document.getElementById("csgo").addEventListener("click", csgoArticle);
document.getElementById("fortnite").addEventListener("click", fortniteArticle);
document
  .getElementById("rocketleague")
  .addEventListener("click", rocketleagueArticle);

function csgoArticle() {
  document.getElementById("aboutTourney").innerHTML = csgo;
}

function fortniteArticle() {
  document.getElementById("aboutTourney").innerHTML = fortnite;
}

function rocketleagueArticle() {
  document.getElementById("aboutTourney").innerHTML = rocketleague;
}
