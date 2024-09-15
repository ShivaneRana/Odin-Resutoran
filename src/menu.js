import image1 from "./images/food/miso.jpg";
import image2 from "./images/food/ChawanMushi.jpg";
import image3 from "./images/food/Matcha.jpg";
import image4 from "./images/food/Mochi.jpg";
import image5 from "./images/food/Natto.jpg";
import image6 from "./images/food/Onigiri.jpg";
import image7 from "./images/food/ramen.jpg";
import image8 from "./images/food/Sashimi.jpg";
import image9 from "./images/food/sushi.jpg";
import image10 from "./images/food/tempura.jpg";
import image11 from "./images/food/Tonkatsu.jpg";
import image12 from "./images/food/udon.jpg";
import "./menu.css";

const displayMenu = (function(){
    console.log("Menu.js was loaded");
    const images = [image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12];
    const names = ["Miso","Chawanmushi","Matcha","Mochi","Natto","Onigiri","Ramen","Sashimi","Sushi","Tempura","Tonkatsu","Udon"];
    const prices = [0.12,0.34,2.23,0.98,8.50,20.1,0.12,0.34,2.23,0.98,8.50,20.1]
    
    const createItems = function(image,name,price){
        this.image = image;
        this.name = name;
        this.price = price;
        const nameu = document.createElement("p");
        const divu = document.createElement("div");
        const imageimageu = document.createElement("img");
        const priceu = document.createElement("div");
        priceu.classList.add("price");
        nameu.classList.add("name");
        imageimageu.classList.add("imageimage");
        divu.classList.add("divdiv");
        priceu.textContent = this.price;
        nameu.textContent = this.name;
        imageimageu.src = this.image;
        divu.append(imageimageu);
        divu.append(nameu);
        divu.append(priceu);
        return divu;    
    }

    const mainDis = function(){
        const maindiv = document.createElement("div");
        maindiv.classList.add("mainContainer");
        for(let i = 0;i < 12;i++){
            maindiv.append(new createItems(images[i],names[i],prices[i]));
        }
        return maindiv;  
    }

    return {mainDis};
})();

export {displayMenu};