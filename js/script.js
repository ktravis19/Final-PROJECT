// Contact Form

const form = getElementById("myName");
const form = document.querySelector ("myEmail");
const form = document.querySelector ("message");

form.addEventListener("submit", (event) => { evnt.preventDefault ();
	
	sendData();
});

// DROPDOWN MENU

const hamburgerMenuDropdown = document.getElementById ('hamburger-menu');

hamburgerMenuDropdown.addEventListener ("click", displayhamburgerMenu);

function displayhamburgerMenu (){
	hamburgerMenuDropdown.classList.add("show");
	hamburgerMenuDropdown.classList.remove("show");
}