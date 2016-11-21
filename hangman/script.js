var array = [];
var guess = [];
var win = [];
var life = 10;  
var pat = /^[a-z]+$/;

function wordObject() {
  this.word = "";
  this.letter = ""; 
  this.length = 0;
 
}

var myword = new wordObject;

var div = document.getElementById("placeholder");
var lifecount = document.createTextNode(life);
div.appendChild(lifecount);

function checkword() {
  var usrtext = this.letter; 
  if(pat.test(usrtext) == false){
  alert('Only lowercase characters allowed');
  } else {
  getword();
  makeblanks(); 
  win.push(myword.length);
  }

}

function getword() {
  var text = document.getElementsByName('textbox1')[0].value
  var textlength = text.length; 
  myword.word = text;
  myword.length = textlength; 
  document.getElementsByName('textbox1')[0].value="";
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
    var textnode = document.createTextNode(myword.letter);
    var item = document.getElementById("placeholderb");
    item.replaceChild(textnode, item.childNodes[num]); 
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
  document.getElementsByName('textbox2')[0].value="";
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
  var test = myword.word
  var check = test.indexOf(myword.letter);
  if (check!= -1) {
  while ((i = test.indexOf(myword.letter, i+1)) != -1) {
  checkuserletter(i); }
  } else { 
 life = life -1;
    if (life == 0) {
        alert("you loose");
        var textnode = document.createTextNode(life);
        var item = document.getElementById("placeholder");
        item.replaceChild(textnode, item.childNodes[0]); 
    } else {
        var textnode = document.createTextNode(life);
        var item = document.getElementById("placeholder");
        item.replaceChild(textnode, item.childNodes[0]); 
      }
    } 
}



















  
















