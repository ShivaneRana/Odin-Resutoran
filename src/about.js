import "./about.css";

const displayAbout = (function(){
    console.log("About.js was loaded");
    const imageDiv = function(){
        const div = document.createElement("div");
        const innerDiv = document.createElement("div");
        const header1 = document.createElement("h1");
        const paragraph = document.createElement("p");
        innerDiv.append(header1,paragraph);
        header1.classList.add("heading");
        paragraph.classList.add("para")
        header1.textContent = "About Us";
        paragraph.textContent = "Welcome to Kobe, where the rich traditions ofJapanese cuisine come to life. Inspired by the culinary heritage of Japan, we bring you an authentic dining experience that celebrates fresh ingredients, delicate flavors, and meticulous preparation. At Kobe, our chefs masterfully craft dishes that reflect the essence of Japanese culture, from the sizzle of our teppanyaki grill to the artistry of our sushi rolls. Step into a serene ambiance that captures the spirit of Japan, and let us take you on a flavorful journey that delights the senses and warms the soul. Come, experience the true taste of Japan at Kobe."
        div.append(innerDiv);
        div.classList.add("divv");
        innerDiv.classList.add("innerDiv");
        return div;
    }

    return {imageDiv};
})();

export {displayAbout};