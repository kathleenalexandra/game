var array = [];
var guess = [];
var win = []; 
var lives = 10;
var pat = /^[a-z]+$/;


var div = document.getElementById("placeholder");
var lifecount = document.createTextNode(lives);
div.appendChild(lifecount);



function checkword() {
var usrtext = document.getElementsByName('textbox1')[0].value
if(pat.test(usrtext) == false){
alert('Only lowercase characters allowed');
} else {

getword();
makeblanks(); 

win.push(usrtext.length);

}

}



function getword() {
var text = document.getElementsByName('textbox1')[0].value
return text;

}
 

function makeblanks() {
var word = getword(); 
choice = word.length


for(i=0; i< choice; i++) {
array.push("___ ");

}

for(i=0; i< array.length; i++) {
var Div = document.getElementById("placeholderb");
var con = document.createTextNode(array[i]);
Div.appendChild(con);

}

}


function checkuserletter(x) {

var letterb = getletter();
var num = x;
var number = num + 1;

var textnode = document.createTextNode(letterb);
var item = document.getElementById("placeholderb");
item.replaceChild(textnode, item.childNodes[number]); 

win[0] = win[0] - 1 
if (win[0] == 0) {

  alert("you won!");
}

}


function checkletter() {
var usrletter = document.getElementsByName('textbox2')[0].value
if(pat.test(usrletter) == false){
alert('Only lowercase characters allowed');
} else {


getletter();
pagedisplay();

}

}

function getletter() {
var letter = document.getElementsByName('textbox2')[0].value
return letter;
}


function pagedisplay() {
var mylet = getletter();
var strlet = String(mylet);
var myword = getword();
var strword = String(myword);
var check = guess.indexOf(strlet);


if (guess.length == 0) {
    guess.push(strlet);

    var choice = document.getElementById("wordbank");
    var choose = document.createTextNode(strlet);
    choice.appendChild(choose);

    lettertest();
} else if (check == -1) {
      guess.push(strlet);
      
      var choice = document.getElementById("wordbank");
      var choose = document.createTextNode(strlet);
      choice.appendChild(choose);

      lettertest();
      
} else {
      alert("pick a different letter"); 
}

}


function lettertest() {
var lettera = getletter();
var word = getword();
var strword = String(word);
var strletter = String(lettera);
var i = -1;
var check = strword.indexOf(strletter);

if (check!= -1) {

while ((i = strword.indexOf(strletter, i+1)) != -1){
checkuserletter(i);

}


} else {

lives = lives -1;

if (lives == 0) {
alert("you loose");
var textnode = document.createTextNode(lives);
var item = document.getElementById("placeholder");
item.replaceChild(textnode, item.childNodes[1]); 

} else {

var textnode = document.createTextNode(lives);
var item = document.getElementById("placeholder");
item.replaceChild(textnode, item.childNodes[1]); 



}

} 

}



















  
















