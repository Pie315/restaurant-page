import './style.css';
import buildHome from './home';
import buildMenu from './menu';

function resetPage() {
    const content = document.querySelector("#content")
    const contents = document.querySelector(".resetable")
    if (contents == null) {
        return
    }
    content.removeChild(contents)
}

const buttonMaker = (selected) => {

    // Creation of all of the button and boilerplate
    const content = document.querySelector("#content");
    const box = document.createElement("div");
    box.classList.add("flexy");
    const home = document.createElement("button");
    const menu = document.createElement("button");
    const contact = document.createElement("button");

    // Addition of id's and text to buttons
    home.textContent = "home";
    home.id = "home";
    menu.textContent = "menu";
    menu.id = "menu";
    contact.textContent = "contact";
    contact.id = "contact";

    // Event listener and button layout
    const tabs = [home, menu, contact];
    tabs.forEach((tab) => {
        tab.classList.add("clickable")
        box.appendChild(tab)
        tab.addEventListener("click", () => {
            const targetPage = tab.textContent;
            switch (targetPage) {
                case "home":
                    resetPage()
                    buildHome()
                    break
                case "menu":
                    resetPage()
                    buildMenu()
                    break
                case "contact":
                    break
                default:
                    console.log("error")
            }
        });
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
            console.log(home);
    }
    content.appendChild(box);
}


buttonMaker("home")