import './style.css';
import buildHome from './home';
import buildMenu from './menu';
import buildContacts from './contact';

function resetPage() {
    const content = document.querySelector("#content")
    const contents = document.querySelector(".resetable")
    if (contents == null) {
        return
    }
    content.removeChild(contents)
}

const buttonMaker = () => {

    // Creation of all of the button and boilerplate
    const content = document.querySelector("#content");
    const box = document.createElement("div");
    box.classList.add("flexy");
    const home = document.createElement("button");
    const menu = document.createElement("button");
    const contact = document.createElement("button");

    // Addition of id's and text to buttons
    home.textContent = "Home";
    home.id = "home";
    menu.textContent = "Menu";
    menu.id = "menu";
    contact.textContent = "Contact";
    contact.id = "contact";

    // Event listener and button layout
    const tabs = [home, menu, contact];
    home.classList.add("current")
    tabs.forEach((tab) => {
        tab.classList.add("clickable")
        box.appendChild(tab)
        tab.addEventListener("click", () => {
            const targetPage = tab.textContent;
            switch (targetPage) {
                case "Home":
                    resetPage()
                    buildHome()
                    home.classList.add("current")
                    menu.classList.remove("current")
                    contact.classList.remove("current")
                    break
                case "Menu":
                    resetPage()
                    buildMenu()
                    menu.classList.add("current")
                    home.classList.remove("current")
                    contact.classList.remove("current")
                    break
                case "Contact":
                    resetPage()
                    buildContacts()
                    contact.classList.add("current")
                    menu.classList.remove("current")
                    home.classList.remove("current")
                    break
                default:
                    console.log("errors")
            }
        });
    })
    content.appendChild(box);
}


buttonMaker()
buildHome()