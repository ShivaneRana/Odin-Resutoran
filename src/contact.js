import "./contact.css";
import image from "./images/file.png"

const displayContact = (function(){
    console.log("Contact.js was loaded");
    const displayForm = function(){
        const div = document.createElement("div");
        const form = document.createElement("form");
        const name = document.createElement("input");
        const email = document.createElement("input");
        const phone = document.createElement("input");
        const message = document.createElement("textarea");
        const submit = document.createElement("button");
        submit.classList.add("submit")

        // minor edit for all the inputs
        submit.textContent = "Submit";
        name.setAttribute("placeholder","name");
        name.setAttribute("type","text");

        email.setAttribute("placeholder","xyz@gmail.com");
        email.setAttribute("type","email");

        phone.setAttribute("placeholder","12345678");
        phone.setAttribute("type","number")
        message.setAttribute("placeholder","Message goes here");

        form.append(name,email,phone,message);
        form.append(submit);
        div.classList.add("formContainer");
        form.classList.add("formform");
        div.append(form);
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