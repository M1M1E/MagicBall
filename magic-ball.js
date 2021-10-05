//tableau contenant les reponses
let reponses = ["Essaye plus tard", "Essaye encore", "Pas d'avis", "C'est ton destin", "Le sort en est jeté", "Une chance sur deux", "Repose ta question", "D'après moi, oui", "C'est certain", "Oui absolument", "Tu peux compter dessus", "Sans aucun doute", "Très probable", "Oui", "C'est bien parti", "C'est non", "Peu probable", "Faut pas rêver", "N'y compte pas", "Impossible"];
window.onload = function()
{

document.getElementById('btn').addEventListener('click', magicBall);

console.log(magicBall);
}

function magicBall()
{
    let index = Math.floor(reponses.length*Math.random());
    document.querySelector('#result').innerHTML = reponses[index]; 
}
