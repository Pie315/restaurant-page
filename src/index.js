import './style.css';
import buildLanding from './home';

const buttonMaker = (selected) => {

    const content = document.querySelector("#content");
    const box = document.createElement("div");
    box.classList.add([".flexy", ".box"]);
    const home = document.createElement("button");
    const menu = document.createElement("button");
    const contact = document.createElement("button");

    home.textContent = "home"
    menu.textContent = "menu"
    contact.textContent = "contact"

    const tabs = [home, menu, contact];
    tabs.forEach((tab) => {
        box.appendChild(tab)
    })

    switch(selected) {
        case "home":
            home.classList.add("current")
            break
        case "menu":
            menu.classList.add("current")
            break
        case "contact":
            contact.classList.add("current")
            break
        default:
            console.log("error");
    }
    content.appendChild(box);
}


console.log("TESTWATCH");

buttonMaker()
buildLanding();