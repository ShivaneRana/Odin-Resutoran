import "./about.css";

const displayAbout = (function(){
    console.log("About.js was loaded");
    const imageDiv = function(){
        const div = document.createElement("div");
        const innerDiv = document.createElement("div");
        innerDiv.textContent = "about us content will goo here";
        div.append(innerDiv);
        div.classList.add("divv");
        innerDiv.classList.add("innerDiv");
        return div;
    }

    return {imageDiv};
})();

export {displayAbout};