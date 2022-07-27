window.onscroll = function() {myFunction()};

var navbar = document.getElementById("nav");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

function responsive(){
    var x=document.getElementById("menu");
    if(x.className==="menu"){
        x.className="menu2";

    }  
    else{
        x.className="menu";
    }
    var y=document.getElementById("todder");
    if(y.className==="fa fa-bars"){
        y.className="fa fa-close";
    }
    else{
        y.className="fa fa-bars";
    }
}