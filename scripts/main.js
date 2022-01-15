// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Stomata!';

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'https://upload.wikimedia.org/wikipedia/commons/9/91/Opening_and_Closing_of_Stoma.svg') {
      myImage.setAttribute('src','images/stomata2.jpg');
    } else {
      myImage.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/9/91/Opening_and_Closing_of_Stoma.svg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Stomata are cool, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Stomata are cool, ' + storedName;
  }

myButton.onclick = function() {
  setUserName();
}