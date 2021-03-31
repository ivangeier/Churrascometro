// REGRA DO NEGOCIO

// Carne - 400g por pessoa || +6h de festa - 650g
// Cerveja - 1200ml por pessoa || +6h de festa - 2000ml
// Refrigerante/Agua - 1000ml por pessoa || +6h de festa - 1500ml

// Crianças vale por 0.5


// Get information from inputs
let adl = document.getElementById("adl");
let chd = document.getElementById("chd");
let hrs = document.getElementById("hrs");

// Event Listener - check when the button is activate and call the function calculate
let button = document.getElementById("calculate");
button.addEventListener("click", calculate);

function calculate() {

    // Get elements to update with answers later
    let answerMeat = document.getElementById("meat");
    let answerBeer = document.getElementById("beer");
    let answerSoftDrinks = document.getElementById("softDrinks");

    // Set DIV to visible
    answerMeat.style.display = "block";
    answerBeer.style.display = "block";
    answerSoftDrinks.style.display = "block";

    // Set elements with answers
    answerMeat.innerText = calcMeat(adl.value, chd.value, hrs.value) + " Kg de Carne";
    answerBeer.innerText = calcBeer(adl.value, hrs.value) + " L de Cerveja";;
    answerSoftDrinks.innerText = calcSoftDrinks(adl.value, chd.value, hrs.value) + " L de Bebidas não alcóolicas";;
}

function calcMeat(adl, chd, hrs) {
    if (hrs >= 6) {
        let meatPP = 650;
        return ((adl * meatPP) + (chd * (meatPP / 2))) / 1000;
    } else {
        let meatPP = 400;
        return ((adl * meatPP) + (chd * (meatPP / 2))) / 1000;
    }
}

function calcBeer(adl, hrs) {
    if (hrs >= 6) {
        let beerPP = 2000;
        return (adl * beerPP) / 1000;
    } else {
        let beerPP = 1200;
        return (adl * beerPP) / 1000;
    }
}

function calcSoftDrinks(adl, chd, hrs) {
    if (hrs >= 6) {
        let softDrinksPP = 1500;
        return ((adl * softDrinksPP) + (chd * (softDrinksPP / 2))) / 1000;
    } else {
        let softDrinksPP = 1000;
        return ((adl * softDrinksPP) + (chd * (softDrinksPP / 2))) / 1000;
    }
}