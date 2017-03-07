var myImage = document.querySelector('img');
myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
    var myWidth = myImage.getAttribute('width');
    if(myWidth ==='50%'){
        myImage.setAttribute('width','100%');
    }else{
        myImage.setAttribute('width','70%');
    }
	if(mySrc === '/bgimage1.jpg') {
      myImage.setAttribute ('src','bgimage1.jpg');
	} else {
	  myImage.setAttribute ('src','bgimage2.jpg');
	}
}

var myHeading = document.querySelector('h1');
myHeading.innerHTML = 'Hello world!';
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}