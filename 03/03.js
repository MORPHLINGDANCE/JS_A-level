
    // assign: evaluation
var a = 5; // 5 это выражение
var b, c;

b = (a) * 5; // все что после равно это выражение
b = c = (b/2);// все что после равно это выражение

    // Number: age
let ageOfUser = +prompt('Введите ваш возраст',21);
alert(`Ваш год рождения: ` + (2024 - ageOfUser));

    // Number: temperature
let temperatureOfCelsius = +prompt('Введите температуру в цельсиях',25)
alert(temperatureOfCelsius * 9 / 5 + 32+`° фаренгейта`);

    // Number: divide
let firstUserNumber = +prompt('Введите первый делитель,',77);
let secondUserNumber = +prompt('Введите второй делитель',12);
alert(result = Math.round(firstUserNumber / secondUserNumber));

    // Number: currency
const rate = 3.6;
let currency = +prompt('Введите сумму',10);
let result =(currency / rate).toFixed(2);
alert(result);

    // Number: RGB
let red, green,blue;
red = +prompt('Введите значение red в 10-ой системе',225);
green = +prompt('Введите значение green в 10-ой системе',225);
blue = +prompt('Введите значение blue в 10-ой системе',225);
let color = `${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
alert(`CSS-цвет: ${color}`);

    // Number: flats
let floors = +prompt("Введите количество этажей");
let flats = +prompt("Введите количество квартир на этаже");
let numberApartment = +prompt("Введите номер квартиры");
let entrance = Math.ceil(numberApartment / (floors * flats));
let floor = Math.ceil(numberApartment % (floors * flats)/flats);
alert(`в ${floors} этажном доме по ${flats} квартиры, ${numberApartment} квартира находится на ${floor} этаже в подьезде: ${entrance}`);
