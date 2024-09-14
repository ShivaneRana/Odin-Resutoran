import image1 from "./images/ramen.svg";

const displayHome = (function(){
    console.log("Home.js was loaded")

    const textDiv = function(){
        const div = document.createElement("div");
        div.style.display = "flex";
        div.style.justifyContent = "center";
        div.style.alignItems = "center";
        div.textContent = "This is div";
        div.style.width = "50%";
        div.style.height = "100%";
        return div;
    }

    const imageArea = function(){
        const ma = document.createElement("img");
        ma.src = image1;
        ma.style.width = "50%";
        ma.style.height = "100%";
        return ma;
    }

    return {textDiv,imageArea};
})();

export {displayHome};