import "./home.css";

const displayHome = (function(){
    console.log("Home.js was loaded")

    const textDiv = function(){
        const div = document.createElement("div");
        const header1 = document.createElement("h1");
        const paragraph = document.createElement("p");
        const button = document.createElement("button");
        const header2 = document.createElement("h2");
        header1.textContent = "Japanese Text goes here";
        header2.textContent = "blah blah blah";
        paragraph.textContent = "Lorem ipsum kinda stufff";
        button.textContent = "button";
        div.classList.add("left");
        header1.classList.add("header1");
        header2.classList.add("header2");
        button.classList.add("but");
        paragraph.classList.add("para");
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