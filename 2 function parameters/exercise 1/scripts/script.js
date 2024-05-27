'use strict';

function calculateDiameter(r) {

    let diameter = r * 2;

    diameter = Math.round(diameter * 10 ** 5) / 10 ** 5;

    return 'the diameter of a circle with a radius of ' + r + ' is ' + diameter + '.\n';
}

function calculateArea(r) {

    let area = Math.PI * (r ** 2);

    area = Math.round(area * 10 ** 5) / 10 ** 5;

    return 'the area of a ciecle with a radius of ' + r + ' is ' + area + ' units squared.\n';
}

function calculateCircumference(r) {

    let circumference = 2 * Math.PI * r;

    circumference = Math.round(circumference * 10 ** 5) / 10 ** 5;

    return 'the circumference of a circle with a radius of ' + r + ' is ' + circumference + '.\n';
}

function calculateSurfaceArea(r) {

    let surfaceArea = 4 * Math.PI * (r ** 2);

    surfaceArea = Math.round(surfaceArea * 10 ** 5) / 10 ** 5;

    return 'the surface area of a sphere with a radius of ' + r + ' is ' + surfaceArea + '.\n';
}

function calculateVolume(r) {

    let volume = (4 / 3) * Math.PI * (r ** 3);

    volume = Math.round(volume * 10 ** 5) / 10 ** 5;

    return 'the volume of a sphere with a radius of ' + r + ' is ' + volume + ' units cubed.\n';
}

function addToParagraph(id, str) {

    let paragraph = document.getElementById(id);

    paragraph.innerText += str;
}

function calculateProperties(id) {

    let r = document.getElementById('input').value;

    addToParagraph(id, calculateDiameter(r));
    addToParagraph(id, calculateArea(r));
    addToParagraph(id, calculateCircumference(r));
    addToParagraph(id, calculateSurfaceArea(r));
    addToParagraph(id, calculateVolume(r));
}