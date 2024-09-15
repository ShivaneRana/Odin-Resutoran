import "./contact.css";
import image from "./images/file.png"

const displayContact = (function(){
    console.log("Contact.js was loaded");
    const displayForm = function(){
        const div = document.createElement("div");
        const form = document.createElement("form");
        div.append(form);
        div.classList.add("formContainer");
        div.textContent = "asdfsadf";
        form.classList.add("formform");
        return div;
    }

    const displayMessage = function(){
        const div = document.createElement("div");
        div.classList.add("message");
        div.textContent = "We value your feedback!";
        return div;
    }

    const displayImage = function(){
        const mainImage = document.createElement("img");
        mainImage.src = image;
        mainImage.classList.add("handshake");
        return mainImage;
    }

    const displayMain = function(){
        const maindiv = document.createElement("div");
        maindiv.append(displayMessage(),displayImage(),displayForm());
        maindiv.classList.add("mainmain")
        return maindiv;
    }

    return {displayMain};
})();

export {displayContact};