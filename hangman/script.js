var array = [];
var guess = [];
var win = []; 
var lives = 10;
var pat = /^[a-z]+$/;

function wordObject() {
  this.word = " ";
  this.letter = " "; 
  this.length = 0;
}

var myword = new wordObject;

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
  var textlength = text.length; 
  myword.word = text;
  myword.length = textlength; 
}
 
function makeblanks() {
  for(i=0; i< myword.length; i++) {
  array.push("___ ");
}

for(i=0; i< array.length; i++) {
    var Div = document.getElementById("placeholderb");
    var con = document.createTextNode(array[i]);
    Div.appendChild(con);
  }
}

function checkuserletter(x) {
    var num = x;
    var number = num + 1;
    var textnode = document.createTextNode(myword.letter);
    var item = document.getElementById("placeholderb");
    item.replaceChild(textnode, item.childNodes[number]); 
    win[0] = win[0] - 1 
    if (win[0] == 0) {
    alert("you won!");
  }
}

function checkletter() {
  var usrletter = document.getElementsByName('textbox2')[0].value
  if(pat.test(usrletter) == false) {
  alert('Only lowercase characters allowed');
  } else {
  getletter();
  pagedisplay();
  }
}

function getletter() {
  var letter = document.getElementsByName('textbox2')[0].value
  myword.letter = letter;
}

function pagedisplay() {
var check = guess.indexOf(myword.letter);
  if (guess.length == 0) {
      guess.push(myword.letter);
      var choice = document.getElementById("wordbank");
      var choose = document.createTextNode(myword.letter);
      choice.appendChild(choose);
      lettertest();
  } else if (check == -1) {
        guess.push(myword.letter);
        var choice = document.getElementById("wordbank");
        var choose = document.createTextNode(myword.letter);
        choice.appendChild(choose);
        lettertest(); 
  } else {
        alert("pick a different letter"); 
    }
}

function lettertest() {
  var i = -1;
  var check = myword.word.indexOf(myword.letter);
  if (check!= -1) {
  while ((i = myword.word.indexOf(myword.letter, i+1)) != -1) {
  checkuserletter(i); }
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



















  
















