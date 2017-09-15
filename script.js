var elem=document.getElementById("hero-sprite");
var pos;
var x;
var y;
var check;
var pozycjaBloczkaX;
var pozycjaBloczkaY;
var wynik=0;
var bloczek=document.getElementById("bloczek");



function start() {
x=150;
y=150;
pos=x;
document.getElementById("popup-menu").style.display="none";
elem.style.display="block";
elem.style.top=150+"px";
elem.style.left=150+"px";
document.getElementById("licznik").innerHTML="0";
wynik=0;
window.addEventListener('keyup', arrows);

randomBloczek()
}//koniec funkcji start

function arrows(e) {
  var keycode=e.keyCode;

  switch(keycode) {

    case 87,119:
      gora();
      console.log("keycode "+keycode);
      break;

    case 65,97:
      left();
      console.log("keycode "+keycode);
      break;

    case  83,115:
      dol();
      console.log("keycode "+keycode);
      break;

    case 68,100:
      right();
      console.log("keycode "+keycode);
      break;

}//koniec switcha

}//koniec funkcji arrows

//Generowanie bloczka
function randomBloczek() {
var t=setTimeout(random,1000);

	function random(){

var liczba=Math.floor(Math.random()*4+1);

console.log(liczba);
//ustalenie pozycji bloczka
switch(liczba) {
		case 1:
        	bloczek.style.display="block";
            bloczek.style.top="50px";
            bloczek.style.left="50px";
            bloczek.style.animationName="none";
            bloczek.style.backgroundColor="inherit";
            pozycjaBloczkaX=50;
            pozycjaBloczkaY=50;
            break;
        case 2:
        	bloczek.style.display="block";
            bloczek.style.top="300px";
            bloczek.style.left="300px";
            bloczek.style.animationName="none";
            bloczek.style.backgroundColor="inherit";
            pozycjaBloczkaX=300;
            pozycjaBloczkaY=300;
            break;
        case 3:
        	bloczek.style.display="block";
            bloczek.style.top="50px";
            bloczek.style.left="300px";
            bloczek.style.animationName="none";
            bloczek.style.backgroundColor="inherit";
            pozycjaBloczkaX=300;
            pozycjaBloczkaY=50;
            break;
        case 4:
        	bloczek.style.display="block";
            bloczek.style.top="300px";
            bloczek.style.left="50px";
            bloczek.style.animationName="none";
            bloczek.style.backgroundColor="inherit";
            pozycjaBloczkaX=50;
            pozycjaBloczkaY=300;
            break;
}//koniec switcha
console.log("Pozycja bloczka X: "+pozycjaBloczkaX);
console.log("Pozycja bloczka y: "+pozycjaBloczkaY);
window.addEventListener('keypress', arrows);
document.getElementById("left").removeAttribute("disabled", "true");
          document.getElementById("right").removeAttribute("disabled", "true");
          document.getElementById("up").removeAttribute("disabled", "true");
          document.getElementById("down").removeAttribute("disabled", "true");
}//koniec funkcji random

}//koniec funkcji random bloczek



//Sprawdzenie zetknięcia bloczków
function touch() {
console.log("pozycja w funkcji touch"+x+" "+pozycjaBloczkaX+" "+y+" "+pozycjaBloczkaY);
	if (x<=pozycjaBloczkaX+50 && x>=pozycjaBloczkaX-50 && y<=pozycjaBloczkaY+50 && y>=pozycjaBloczkaY-50) {


           wynik+=1;
           document.getElementById("licznik").innerHTML=wynik;
           generuj();

          if(wynik==4) {licznik();}
          else{
          document.getElementById("left").setAttribute("disabled", "true");
          document.getElementById("right").setAttribute("disabled", "true");
          document.getElementById("up").setAttribute("disabled", "true");
          document.getElementById("down").setAttribute("disabled", "true");
          window.removeEventListener('keypress', arrows);
          randomBloczek();}

       }
       else {console.log("clear");}
}//koniec funkcji touch


//Sterowanie piratem

function gora() {
krok=0;
testMove(3);

var id=setInterval(frame1,1);
pos=y;

        function frame1() {

        if(krok==10) {
        clearInterval(id);
        y=y-10;
        touch();
        }

        else{krok++;
        elem.style.top = y + (-krok) +"px";}

        }//koniec funkcji frame1

console.log(x);
console.log(y);
}//koniec funkcji gora

function dol() {
krok=0;
testMove(4);

var id=setInterval(frame1,1);
pos=y;

        function frame1() {

        if(krok==10) {
        clearInterval(id);
        y+=10;
        touch();
        }

        else{krok++;
        elem.style.top = y + krok +"px";}

        }//koniec funkcji frame1

console.log(x);
console.log(y);
}//koniec funkcji gora

function left() {
krok=0;
testMove(1);

var id=setInterval(frame1,1);

pos=x;

        function frame1() {

        if(krok==10) {
        clearInterval(id);
        x=x-10;
        touch();}

        else{krok++
        elem.style.left=x+(-krok)+"px";}

        }//koniec funkcji frame1

console.log(x);
console.log(y);
}//koniec funkcji left

function right() {
krok=0;
testMove(2);

var id=setInterval(frame1,1);
pos=x;

        function frame1() {

        if(krok==10) {
        clearInterval(id);
        x+=10;
        touch();}

        else{krok++;
        elem.style.left= x + krok +"px";
        }
        }//koniec funkcji frame1

console.log(x);
console.log(y);
}//koniec funkcji right


//Sprawdzenie zderzenia kapitana z krawędziami pola gry
function testMove(check) {
switch(check){
	case 1:
    	if(x==0) {x=10}
        else{break;}
    case 2:
        if(x==350) {x=340;}
        else{break;}
    case 3:
        if(y==0) {y=10; }
        else{break;}
    case 4:
        if(y==350) {y=340;}
        else{break;}
}}//koniec funkcji check


//Generowanie stroboskopu po uderzeniu bloczka
function generuj() {
var red=0;
var green=0;
var blue=0;
var id = setInterval(frame,100);
var pos=0;

        function frame(){

        	if (pos == 10) {clearInterval(id)}//koniec if

            else {pos++;
             red=Math.floor(Math.random()*255+1);
   			 green=Math.floor(Math.random()*255+1);
   			 blue=Math.floor(Math.random()*255+1);
             console.log(red+" "+green+" "+blue);
             document.getElementById("bloczek").style.backgroundColor="rgb("+red+","+green+","+blue+")";
             bloczek.style.animationName="generuj";


          }//koniec else
            }//koniec funkcji frame
}
//koniec funkcji generuj


function licznik() {

    wynik=0;
    console.log(wynik);
    document.getElementById("licznik").innetHTML=wynik;
    var g=setTimeout(znikanie, 1000);
      function znikanie() {
    bloczek.style.display="none";}
    console.log("zmienna wynik="+wynik);
    elem.style.top=170+"px";
    elem.style.left=170+"px";
    document.getElementById("popup-menu").style.display="block";

}
