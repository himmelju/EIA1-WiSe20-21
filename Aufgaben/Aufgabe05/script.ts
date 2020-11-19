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

//Africa
var prozentAfricaGes = ((africa2018 / gesEmission) * 100) .toFixed(2); //.tofixed(2) zum abrunden
var wachstumAfricaP = (((africa2018 / africa2008) -1) * 100) .toFixed(2);
var wachstumAfricaKG = (africa2018 - africa2008) .toFixed(2);

//South America
var prozentSouthAmericaGes = ((southAmerica2018 / southAmerica2008) * 100) .toFixed(2);
var wachstumSouthAmericaP = (((southAmerica2018 / southAmerica2008) -1) *100) .toFixed(2);
var wachstumSouthAmericaKG = (southAmerica2018 - southAmerica2008) .toFixed(2);

//Europe
var prozentEuropeGes = ((europe2018 / europe2008) * 100) .toFixed(2);
var wachstumEuropeP = (((europe2018 / europe2008) -1) *100) .toFixed(2);
var wachstumEuropeKG = (europe2018 - europe2008) .toFixed(2);

//North America 
var prozentNorthAmericaGes = ((northAmerica2018 - northAmerica2008) *100) .toFixed(2);
var wachstumNorthAmericaP = (((northAmerica2018 / northAmerica2008) -1) * 100) .toFixed(2);
var wachstumNorthAmericaKG = (northAmerica2018 - northAmerica2008) .toFixed(2);

//Asia
var prozentAsiaGes = ((asia2018 - asia2008) *100) .toFixed(2);
var wachstumAsiaP = (((asia2018 / asia2008) -1) * 100) .toFixed(2);
var wachstumAsiaKG = (asia2018 - asia2008) .toFixed(2);

//Australia
var prozentAustraliaGes = ((australia2018 /australia2008) *100) .toFixed(2);
var wachstumAustraliaP = (((australia2018 / australia2008) -1) * 100) .toFixed(2);
var wachstumAustraliaKG = (australia2018 / australia2008) .toFixed(2);

//Konsolen Ausgabe 
//Berechnungen

//Afrika
console.log ('Emissionswerte von Afrika');
console.log ('Die Emission von Afrika im Jahre 2018 ist: ' +africa2018 + 'kg Co2');
console.log ('Relativ zur Gesamtemission der Welt verursacht Afrika damit ' + prozentAfricaGes + '%');
console.log ('Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um: ' + wachstumAfricaP + '% verändert');
console.log ('2018 im Vergleich zu 2008 sind das ' + wachstumAfricaKG + 'kg CO2')
console.log ('-----------------------------------------------------------------------------------------------');

//Süd Amerika
console.log ('Emissionswerte von Süd Amerika');
console.log ('Die Emission von Süd Amerika im Jahre 2018 ist: ' +southAmerica2018 + 'kg Co2');
console.log ('Relativ zur Gesamtemission der Welt verursacht Süd Amerika damit ' + prozentSouthAmericaGes + '%');
console.log ('Für Süd A,erika hat sich 2018 im Vergleich zu 2008 die Emission um: ' + wachstumSouthAmericaP + '% verändert');
console.log ('2018 im Vergleich zu 2008 sind das ' + wachstumSouthAmericaKG + 'kg CO2')
console.log ('-----------------------------------------------------------------------------------------------');

//Europa
console.log ('Emissionswerte von Europa');
console.log ('Die Emission von Europa im Jahre 2018 ist: ' +europe2018 + 'kg Co2');
console.log ('Relativ zur Gesamtemission der Welt verursacht Europa damit ' + prozentEuropeGes + '%');
console.log ('Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um: ' + wachstumEuropeP + '% verändert');
console.log ('2018 im Vergleich zu 2008 sind das ' + wachstumEuropeKG + 'kg CO2')
console.log ('-----------------------------------------------------------------------------------------------');

//Nord Amerika
console.log ('Emissionswerte von Nord Amerika');
console.log ('Die Emission von Nord Amerika im Jahre 2018 ist: ' +northAmerica2018 + 'kg Co2');
console.log ('Relativ zur Gesamtemission der Welt verursacht NordAmerika damit ' + prozentNorthAmericaGes + '%');
console.log ('Für Nord Amerika hat sich 2018 im Vergleich zu 2008 die Emission um: ' + wachstumNorthAmericaP + '% verändert');
console.log ('2018 im Vergleich zu 2008 sind das ' + wachstumNorthAmericaKG + 'kg CO2')
console.log ('-----------------------------------------------------------------------------------------------');

//Asien
console.log ('Emissionswerte von Asien');
console.log ('Die Emission von Asien im Jahre 2018 ist: ' +asia2018 + 'kg Co2');
console.log ('Relativ zur Gesamtemission der Welt verursacht Asien damit ' + prozentAsiaGes + '%');
console.log ('Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um: ' + wachstumAsiaP + '% verändert');
console.log ('2018 im Vergleich zu 2008 sind das ' + wachstumAsiaKG + 'kg CO2')
console.log ('-----------------------------------------------------------------------------------------------');

//Australien
console.log ('Emissionswerte von Australien');
console.log ('Die Emission von Australien im Jahre 2018 ist: ' +australia2018 + 'kg Co2');
console.log ('Relativ zur Gesamtemission der Welt verursacht Australien damit ' + prozentAustraliaGes + '%');
console.log ('Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um: ' + wachstumAustraliaP + '% verändert');
console.log ('2018 im Vergleich zu 2008 sind das ' + wachstumAustraliaKG + 'kg CO2')
console.log ('-----------------------------------------------------------------------------------------------');

//Konsolen Ausgabe Source
//# sourceMappingURL=script.js.map