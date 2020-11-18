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
var prozentAfricaGes = ((africa2018 / gesEmission) * 100).toFixed(2);
var wachstumAfricaP = (((africa2018 / africa2008) - 1) * 100).toFixed(2);
var wachstumAfricaKG = (africa2018 - africa2008).toFixed(2);
//South America
var prozentSouthAmericaGes = ((southAmerica2018 / southAmerica2008) * 100).toFixed(2);
var wachstumSouthAmericaP = (((southAmerica2018 / southAmerica2008) - 1) * 100).toFixed(2);
var wachstumSouthAmericaKG = (southAmerica2018 - southAmerica2008).toFixed(2);
//Europe
var prozentEuropeGes = ((europe2018 / europe2008) * 100).toFixed(2);
var wachstumEuropeP = (((europe2018 / europe2008) - 1) * 100).toFixed(2);
var wachstumEuropeKG = (europe2018 - europe2008).toFixed(2);
//North America
var prozentNorthAmericaGes = ((northAmerica2018 / northAmerica2008) * 100).toFixed(2);
var wachstumNorthAmericaP = (((northAmerica2018 / northAmerica2008) - 1) * 100).toFixed(2);
var wachstumNorthAmericaKG = (northAmerica2018 - northAmerica2008).toFixed(2);
//Asia
//# sourceMappingURL=script.js.map