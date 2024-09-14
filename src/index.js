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

contentContainer.classList.add("contentContainer");
displayContainer.classList.add("displayContainer");

home.textContent = "Home";
menu.textContent = "Menu";
about.textContent = "About"; 
contact.textContent = "Contact Us";
image.src = sushi;

home.addEventListener("click",() => {
    
})

menu.addEventListener("click",() => {

})

about.addEventListener("click",() => {

})

contact.addEventListener("click",() => {

})

const displayHomeOnFirstLoad = function(){
    displayContainer.append(displayHome.textDiv())
    displayContainer.append(displayHome.imageArea())
}

displayHomeOnFirstLoad();

// append all stuff to respective container
contentContainer.append(displayContainer);
nav.append(home,menu,about,contact);
document.body.append(header,contentContainer);
header.append(image,nav);
