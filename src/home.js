import "./home.css";
import image1 from "./images/ramen.jpg";

const displayHome = (function(){
    console.log("Home.js was loaded")

    const textDiv = function(){
        const div = document.createElement("div");
        const header1 = document.createElement("h1");
        header1.textContent = "Japanese Text goes here";
        const header2 = document.createElement("h2");
        header2.textContent = "blah blah blah";
        const paragraph = document.createElement("p");
        paragraph.textContent = "Lorem ipsum kinda stufff";
        const button = document.createElement("button");
        button.textContent = "button";
        div.classList.add("left");
        div.append(header1,header2,paragraph,button)
        return div;
    }

    const imageDiv = function(){
        const div = document.createElement("div");
        div.classList.add("right");
        div.textContent = "images";
        return div;
    }

    return {textDiv,imageDiv};
})();

export {displayHome};