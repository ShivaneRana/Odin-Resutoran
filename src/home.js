import "styleHome.css";
import image1 from "./images/ramen.jpg";

const displayHome = (function(){
    console.log("Home.js was loaded")

    const textDiv = function(){
        const div = document.createElement("div");
        return div;
    }

    const imageArea = function(){
        const div = document.createElement("div");
        return div;
    }

    return {textDiv,imageArea};
})();

export {displayHome};