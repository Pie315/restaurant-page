import './style.css';
import buildHome from './home';

const buttonMaker = (selected) => {

    const content = document.querySelector("#content");
    const box = document.createElement("div");
    box.classList.add("flexy");
    const home = document.createElement("button");
    const menu = document.createElement("button");
    const contact = document.createElement("button");

    home.textContent = "home"
    home.id = "home"
    menu.textContent = "menu"
    menu.id = "menu"
    contact.textContent = "contact"
    contact.id = "contact"

    const tabs = [home, menu, contact];
    tabs.forEach((tab) => {
        tab.classList.add("clickable")
        box.appendChild(tab)
        tab.addEventListener("click", () => {
            const targetPage = tab.textContent;
            switch (targetPage) {
                case "home":
                    console.log("home")
                    buildHome()
                    break
                case "menu":
                    console.log("menu")
                    break
                case "contact":
                    console.log("contact")
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
buildHome();