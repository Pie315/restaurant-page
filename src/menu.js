//import ingredients from './Ingredients.png'



function buildMenu() {
    const pageInner = document.createElement("div")
    pageInner.classList.add("home")
    pageInner.classList.add("resetable")
    
    //const image = new Image();
    //image.src = ingredients
    //image.classList.add("image")


    //pageInner.appendChild(image)

    pageInner.textContent = "Here's what's on the menu"



    const final = document.querySelector("#content")
    final.appendChild(pageInner)
}

export default buildMenu;