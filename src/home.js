import "./home.css";
import image1 from "./images/1.jpg";
import image2 from "./images/2.jpg";
import image3 from "./images/3.jpg";
import image4 from "./images/4.jpg";

const displayHome = (function(){
    console.log("Home.js was loaded")

    const textDiv = function(){
        const div = document.createElement("div");
        const header1 = document.createElement("h1");
        const paragraph = document.createElement("p");
        const button = document.createElement("button");
        const header2 = document.createElement("h2");
        header1.textContent = "いらっしゃいませ";
        header2.textContent = "Graceful design, exquisite flavors, and tranquil Japanese elegance";
        paragraph.textContent = "Step into our Japanese-themed restaurant, where tradition meets elegance Savor authentic flavors crafted with care.Enjoy a serene atmosphere and exceptional service Your culinary journey to Japan starts here.";
        button.textContent = "order now";
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
        const innerDiv = document.createElement("div");
        const i1 = document.createElement("img");
        const i2 = document.createElement("img");
        const i3 = document.createElement("img");
        const i4 = document.createElement("img");
        i1.classList.add("uwu");
        i2.classList.add("uwu");
        i3.classList.add("uwu");
        i4.classList.add("uwu");
        i1.src = image1;
        i2.src = image2;
        i3.src = image3;
        i4.src = image4;
        innerDiv.classList.add("innerdiv");
        div.classList.add("right");
        innerDiv.append(i1,i2,i3,i4);
        div.append(innerDiv);
        return div;
    }

    return {textDiv,imageDiv};
})();

export {displayHome};