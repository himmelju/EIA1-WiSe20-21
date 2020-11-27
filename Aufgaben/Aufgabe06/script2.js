//Emissionswerte der Regionen 2008 und 2018
//Africa
var africa2008 = 1028;
var africa2018 = 1235.5;
//South America
var southAmerica2008 = 1132.6;
var southAmerica2018 = 1261.5;
//Europe
var europe2008 = 4965.7;
var europe2018 = 4209.3;
//North America
var northAmerica2008 = 6600.4;
var northAmerica2018 = 6035.6;
//Asia
var asia2008 = 12954.7;
var asia2018 = 16274.1;
//Australia
var australia2008 = 1993;
var australia2018 = 2100.5;
//Emissionswerte der Regionen
//Berechnungen 
//Gesamtemissionen
var gesEmission = africa2018 + southAmerica2018 + europe2018 + northAmerica2018 + asia2018 + australia2018;
//DOM Manipulation Anfang 
//Event listener: window.addEventListener('load', function () { document.querySelector (".---") .addEventListener ("click", function ()
//{ domManipulatior ("---", ---, ---); }); });
//Europa
window.addEventListener('load', function () {
    document.querySelector(".europe").addEventListener("click", function () {
        domManipulator("Europa", europe2018, europe2008);
    });
});
//Nord Amerika
window.addEventListener('load', function () {
    document.querySelector(".northamerica").addEventListener("click", function () {
        domManipulator("Nord Amerika", northAmerica2018, northAmerica2008);
    });
});
//Süd Amerika
window.addEventListener('load', function () {
    document.querySelector(".southamerica").addEventListener("click", function () {
        domManipulator("Süd Amerika", southAmerica2018, southAmerica2008);
    });
});
//Afrika
window.addEventListener('load', function () {
    document.querySelector(".africa").addEventListener("click", function () {
        domManipulator("Afrika", africa2018, africa2008);
    });
});
//Asien
window.addEventListener('load', function () {
    document.querySelector(".asia").addEventListener("click", function () {
        domManipulator("Asien", asia2018, asia2008);
    });
});
//Australien
window.addEventListener('load', function () {
    document.querySelector(".australia").addEventListener("click", function () {
        domManipulator("Australien", australia2018, australia2008);
    });
});
//Dom Manipulation Ende
//Funktion Anfang
function domManipulator(kontinent, kontinent2018, kontinent2008) {
    document.querySelector("#titleRegion").innerHTML = kontinent;
    document.querySelector("#titleRegion2").innerHTML = kontinent;
    document.querySelector("#absoluteEmission").innerHTML = kontinent2018.toFixed(2) + " CO2 kg";
    document.querySelector("#totalEmission").innerHTML = (100 / (gesEmission / kontinent2018)).toFixed(2) + "%";
    document.querySelector("#growthPercentEmission").innerHTML = (((kontinent2018 / kontinent2008) - 1) * 100).toFixed(2) + "%";
    document.querySelector("#growthKilogrammEmission").innerHTML = (kontinent2018 - kontinent2008).toFixed(2) + " CO2 kg";
    document.querySelector('.chart').setAttribute('style', 'height:' + (100 / (gesEmission / kontinent2018)).toFixed(2) + "%");
}
//Dom Manipulation Anfang
//Konsolen Ausgabe Anfang
//Berechnungen
//Afrika
console.log('Emissionswerte von Afrika');
console.log('Die Emission von Afrika im Jahre 2018 ist: ' + africa2018 + 'kg Co2');
console.log('Relativ zur Gesamtemission der Welt verursacht Afrika damit ' + prozentAfricaGes + '%');
console.log('Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um: ' + wachstumAfricaP + '% verändert');
console.log('2018 im Vergleich zu 2008 sind das ' + wachstumAfricaKG + 'kg CO2');
console.log('-----------------------------------------------------------------------------------------------');
//Süd Amerika
console.log('Emissionswerte von Süd Amerika');
console.log('Die Emission von Süd Amerika im Jahre 2018 ist: ' + southAmerica2018 + 'kg Co2');
console.log('Relativ zur Gesamtemission der Welt verursacht Süd Amerika damit ' + prozentSouthAmericaGes + '%');
console.log('Für Süd A,erika hat sich 2018 im Vergleich zu 2008 die Emission um: ' + wachstumSouthAmericaP + '% verändert');
console.log('2018 im Vergleich zu 2008 sind das ' + wachstumSouthAmericaKG + 'kg CO2');
console.log('-----------------------------------------------------------------------------------------------');
//Europa
console.log('Emissionswerte von Europa');
console.log('Die Emission von Europa im Jahre 2018 ist: ' + europe2018 + 'kg Co2');
console.log('Relativ zur Gesamtemission der Welt verursacht Europa damit ' + prozentEuropeGes + '%');
console.log('Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um: ' + wachstumEuropeP + '% verändert');
console.log('2018 im Vergleich zu 2008 sind das ' + wachstumEuropeKG + 'kg CO2');
console.log('-----------------------------------------------------------------------------------------------');
//Nord Amerika
console.log('Emissionswerte von Nord Amerika');
console.log('Die Emission von Nord Amerika im Jahre 2018 ist: ' + northAmerica2018 + 'kg Co2');
console.log('Relativ zur Gesamtemission der Welt verursacht NordAmerika damit ' + prozentNorthAmericaGes + '%');
console.log('Für Nord Amerika hat sich 2018 im Vergleich zu 2008 die Emission um: ' + wachstumNorthAmericaP + '% verändert');
console.log('2018 im Vergleich zu 2008 sind das ' + wachstumNorthAmericaKG + 'kg CO2');
console.log('-----------------------------------------------------------------------------------------------');
//Asien
console.log('Emissionswerte von Asien');
console.log('Die Emission von Asien im Jahre 2018 ist: ' + asia2018 + 'kg Co2');
console.log('Relativ zur Gesamtemission der Welt verursacht Asien damit ' + prozentAsiaGes + '%');
console.log('Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um: ' + wachstumAsiaP + '% verändert');
console.log('2018 im Vergleich zu 2008 sind das ' + wachstumAsiaKG + 'kg CO2');
console.log('-----------------------------------------------------------------------------------------------');
//Australien
console.log('Emissionswerte von Australien');
console.log('Die Emission von Australien im Jahre 2018 ist: ' + australia2018 + 'kg Co2');
console.log('Relativ zur Gesamtemission der Welt verursacht Australien damit ' + prozentAustraliaGes + '%');
console.log('Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um: ' + wachstumAustraliaP + '% verändert');
console.log('2018 im Vergleich zu 2008 sind das ' + wachstumAustraliaKG + 'kg CO2');
console.log('-----------------------------------------------------------------------------------------------');
//Konsolen Ausgabe und Dom Manipulation Ende
//sourceMappingURL=script2.js.map
//# sourceMappingURL=script2.js.map