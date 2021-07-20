// L'ordinateur va choisir un nombre au hazard entre 1 et 10.
// On va avoir 3 essai pour trouver le nombre mystère
// Si tu trouve la bonne réponse alors on affiche "FELICITATION" + numéro découvert
// Sinon "Bah alors? Pourquoi vous êtes nul ?" et on propose de recommencer en affichant le nombre non trouvé

let nombre = getRandomInt(1,10);
let reponse = [3,7,10];


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for(let i=0; i<reponse.length; i++){
    if (reponse[i]===nombre){
        console.log(`FELICITATION TU AS REUSSI EN ${i+1} ESSAI`)
        console.log(`LE NOMBRE MYSTERE QUI ETAIT ${nombre}`)
        return;
    }else{
        console.log(`DOMMAGE TU N'AS PAS REUSSI`)
        if (reponse[i] > nombre){
            console.log("C'est moins")
        }else{
            console.log("C'est plus")
        }
    }
};
console.log(`LE NOMBRE MYSTERE QUI ETAIT ${nombre}`)

