let mybutton = document.getElementById("toTop");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
    document.documentElement.style.scrollBehavior = "smooth";
} else {
    mybutton.style.display = "none";
}
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

let container = document.getElementById('login');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == container) {
        container.style.display = "none";
    }
}


var dropdown = document.querySelector(".dropdown");
var button = document.querySelector(".menu");
function menu() {
    if (dropdown.style.display === "grid") {
        dropdown.style.display = "none";
        button.innerHTML = "Menu";
    } else {
        dropdown.style.display = "grid";
        button.innerHTML = "Close";
    }
}


