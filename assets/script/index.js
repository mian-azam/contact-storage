'use strict';



function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

function select(selector, parent = document) {
    return parent.querySelector(selector);
}

// function print(...arg) {
//     console.log(arg);
// }
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
const indexP = select('.index')
const numOfContacts = select('.num-of-contacts');
const userInput = select('.input');
const style = select('.style');
const emailRegex = /^(?=^.{8,}$)[-_A-Za-z0-9]+([_.-][a-zA-Z0-9]+)*@[A-Za-z0-9]+([.-][a-zA-Z0-9]+)*\.[A-Za-z]{2,}$/;

const regex = /^\w{ 1, 64 } (?: [, \t] +\w{ 1, 64 }) { 0, 15 } $/;



const contactArr = [];




function work() {
    let info = userInput.value;
    let infoArr = info.split(', ');


    if (infoArr.length === 3) {
        if (!emailRegex.test(infoArr[2])) {
            para.innerText = 'A valid email is required';
        }
        else {
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

            para.innerText = '';

            onEvent('click', infoDiv, function () {
                // const specificIndex = contactArr.indexOf(contact) + 1
                // indexP.innerText = `Contact: ${specificIndex} `;

                infoDiv.remove();

            });
        }


    } else {
        para.innerText = 'Name, City and Email, all are required.';
    }


}

function savedContacts() {
    numOfContacts.innerText = `Stored Contacts: ${contactArr.length}`
}




onEvent('click', btn, function (event) {
    event.preventDefault();
    if (userInput.value === '') {
        para.innerText = 'Please! fill out your contact info.'
    } else {
        work();
    }

});

