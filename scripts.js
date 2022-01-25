
function pageOne() {
    location.href = "subpages/x.html";
}
  
function pageTwo() {
    location.href = "subpages/y.html";
}
  
function pageThree() {
    location.href = "z.html";
} 

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

function toTop() {
  console.log("poo")
  document.documentElement.scrollTop = 0;
}

var sq1 = document.getElementById("sq1");
var sq2 = document.getElementById("sq2");
var sq4 = document.getElementById("sq4");

function counterRotate(x) {
    if(x==1){
      sq2.style.transitionDelay = ".08s"
      sq4.style.transitionDelay = ".08s"
      sq2.style.transformOrigin = "center";
      sq2.style.transformBox = "auto-fill";
      sq2.style.transform = "rotate(-45deg) scale(.8)";
      sq4.style.transformOrigin = "center";
      sq4.style.transformBox = "auto-fill";
      sq4.style.transform = "rotate(-45deg) scale(.8)";
    }
    if(x==2){
      sq1.style.transitionDelay = ".08s"
      sq4.style.transitionDelay = ".08s"
      sq1.style.transformOrigin = "center";
      sq1.style.transformBox = "auto-fill";
      sq1.style.transform = "rotate(-45deg) scale(.8)";
      sq4.style.transformOrigin = "center";
      sq4.style.transformBox = "auto-fill";
      sq4.style.transform = "rotate(-45deg) scale(.8)";
    }
    if(x==4){
      sq1.style.transitionDelay = ".08s"
      sq2.style.transitionDelay = ".08s"
      sq1.style.transformOrigin = "center";
      sq1.style.transformBox = "auto-fill";
      sq1.style.transform = "rotate(-45deg) scale(.8)";
      sq2.style.transformOrigin = "center";
      sq2.style.transformBox = "auto-fill";
      sq2.style.transform = "rotate(-45deg) scale(.8)";
    }
    
}

function unRotate(x) {
    if(x==1){
      sq2.style.transformOrigin = "center";
      sq2.style.transformBox = "auto-fill";
      sq2.style.transform = "rotate(0deg) scale(1)";
      sq4.style.transformOrigin = "center";
      sq4.style.transformBox = "auto-fill";
      sq4.style.transform = "rotate(0deg) scale(1)";
    }
    if(x==2){
      sq1.style.transformOrigin = "center";
      sq1.style.transformBox = "auto-fill";
      sq1.style.transform = "rotate(0deg) scale(1)";
      sq4.style.transformOrigin = "center";
      sq4.style.transformBox = "auto-fill";
      sq4.style.transform = "rotate(0deg) scale(1)";
    }
    if(x==4){
      sq1.style.transformOrigin = "center";
      sq1.style.transformBox = "auto-fill";
      sq1.style.transform = "rotate(0deg) scale(1)";
      sq2.style.transformOrigin = "center";
      sq2.style.transformBox = "auto-fill";
      sq2.style.transform = "rotate(0deg) scale(1)";
    }
}

var rg3 = document.getElementById("rg3");

function gradBlur() {
    var x = document.documentElement.scrollTop;
    console.log('scrolled ')
}
