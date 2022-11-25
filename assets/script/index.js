'use strict';



function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

function select(selector, parent = document) {
    return parent.querySelector(selector);
}

function print(...arg) {
    console.log(arg);
}
//-------------------------------------------------------------------------------------------

class Contact {
    #name;
    #city;
    #email;
    constructor(name, city, email) {
        this.#name = name;
        this.#city = city;
        this.#email = email;
    }
    getName() {
        return this.#name;
    }
    getCity() {
        return this.#city;
    }
    getEmail() {
        return this.#email;
    }
}
//-------------------------------------------------------------------------------------------

const btn = select('.btn');
const parent = select('.parent');
const para = select('.para');
// const paraTwo = select('.para-two');
const userInput = select('.input');
const style = select('.style');



const contactArr = [];

function work() {
    let info = userInput.value;
    let infoArr = info.split(', ');
    const contact = new Contact(infoArr[0], infoArr[1], infoArr[2]);
    contactArr.push(contact);
    const infoDiv = document.createElement('div');
    const paraOne = document.createElement('p');
    const paraTwo = document.createElement('p');
    const paraThree = document.createElement('p');
    parent.appendChild(infoDiv);
    infoDiv.appendChild(paraOne);
    infoDiv.appendChild(paraTwo);
    infoDiv.appendChild(paraThree);
    paraOne.innerText = `Name: ${contact.getName()}`;
    paraTwo.innerText = `City: ${contact.getCity()}`;
    paraThree.innerText = `Email: ${contact.getEmail()}`;


    para.innerText = `Saved Contacts: ${contactArr.length} `;

    onEvent('click', infoDiv, function () {
        paraTwo.innerText = `Contact: ${contactArr.indexOf(contact) + 1} `;
    });
}


onEvent('click', btn, function (event) {
    event.preventDefault();
    if (userInput.value == '') {
        para.innerText = 'Please! fill out your contact info.'
    } else {
        work();
    }


});

// ^\w{ 1, 64 } (?: [, \t] +\w{ 1, 64 }) { 0, 15 } $