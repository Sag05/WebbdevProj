var nightmode = false;

//HTML Elements
var navbar = document.getElementById("navbar");
var navbarItems = document.getElementsByClassName("nav-items");

//Button & eventlistener
var button = document.getElementById("light-mode-button");
button.addEventListener("click", switchMode);

function switchMode(){
    var text = document.getElementsByClassName("text");
    var backgrounds = document.getElementsByClassName("background");
    if(!nightmode){
        nightmode = true;
        button.innerHTML = "Light Mode";

        //Change color of navbar
        navbar.style.backgroundColor = "#C6578F";
        //Change color of backgroung of navbar items
        for(var i = 0; i < navbarItems.length; i++){
            navbarItems[i].style.backgroundColor = "#";
        }
        
        //change color of background 
        document.body.style.backgroundColor = "#282828";
        for(var i = 0; i < backgrounds.length; i++){
            backgrounds[i].style.backgroundColor = "#282828";
        }

        //Change Color of text
        for(var i = 0; i < text.length; i++){
            text[i].style.color = "#606060";
        }
    }
    else{
        nightmode = false;
        button.innerHTML = "Dark Mode";

        //Change color of navbar
        navbar.style.backgroundColor = "#EB66A8";

        //Change color of background of navbar items
        for(var i = 0; i < navbarItems.length; i++){
            navbarItems[i].style.backgroundColor = "#";
        }

        //Change color of background
        document.body.style.backgroundColor= "#FFFFFF";
        for(var i = 0; i < backgrounds.length; i++){
            backgrounds[i].style.backgroundColor = "#FFFFFF";
        }

        //Change color of text
        for(var i= 0; i < text.length; i++){
            text[i].style.color = "#000000"; 
        }
    }
}