/**
 * Attach a method to a click event
 */

const myElem = document.querySelector('#myElem');

function consoleLogClick(x) {
    console.log(`clicked! ${x}`, x);
}

myElem.addEventListener('click', consoleLogClick);