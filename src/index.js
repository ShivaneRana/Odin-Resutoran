import "./style.css";
import sushi from "./images/KOBE-black.svg";
import { displayHome} from "./home.js";
import { displayAbout } from "./about.js";
import { displayContact } from "./contact.js";
import { displayMenu } from "./menu.js";

const header = document.createElement("header"); //contains logo and nav
const nav = document.createElement("nav"); // main container for button
const contentContainer = document.createElement("div"); // this will load one time
const displayContainer = document.createElement("div"); // this will load after a button is pressed
const home = document.createElement("button");
const menu = document.createElement("button");
const about = document.createElement("button");
const contact = document.createElement("button");
const image = document.createElement("img"); // brand logo
image.style.cursor = "pointer";

image.addEventListener("click",() => {
    home.click();
})

contentContainer.classList.add("contentContainer");
displayContainer.classList.add("displayContainer");

home.textContent = "Home";
menu.textContent = "Menu";
about.textContent = "Our story"; 
contact.textContent = "Get in touch";
image.src = sushi;
image.classList.add("logo")

home.addEventListener("click",() => {
    displayContainer.textContent = "";
    displayContainer.append(displayHome.textDiv());
    displayContainer.append(displayHome.imageDiv());
})

menu.addEventListener("click",() => {
    displayContainer.textContent = "";
    displayContainer.append(displayMenu.mainDis());
})

about.addEventListener("click",() => {
    displayContainer.textContent = "";
    displayContainer.append(displayAbout.imageDiv());
})

contact.addEventListener("click",() => {
    displayContainer.textContent = "";
    displayContainer.append(displayContact.displayMain());
})


const displayHomeOnFirstLoad = function(){
    displayContainer.textContent = "";
    displayContainer.append(displayHome.textDiv());
    displayContainer.append(displayHome.imageDiv());
}

displayHomeOnFirstLoad();

// append all stuff to respective container
contentContainer.append(displayContainer);
nav.append(home,menu,about,contact);
document.body.append(header,contentContainer);
header.append(image,nav);
