import "./style.css"
import sushi from "./images/sushi.png";

const header = document.createElement("header");
const nav = document.createElement("nav");
const image = document.createElement("img");
image.src = sushi;


const home = document.createElement("button");
home.textContent = "Home";
const menu = document.createElement("button");
menu.textContent = "Menu";
const about = document.createElement("button");
about.textContent = "About"; 
const contact = document.createElement("button");
contact.textContent = "Contact Us";

nav.style.backgroundColor = "purple";
nav.append(home,menu,about,contact);
document.body.append(header);
header.append(image,nav);