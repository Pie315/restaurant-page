import ingredients from './Ingredients.png'



function buildHome() {
    const pageInner = document.createElement("div")
    pageInner.classList.add("home")
    pageInner.classList.add("resetable")
    
    const image = new Image();
    image.src = ingredients
    image.classList.add("image")


    pageInner.appendChild(image)




    const final = document.querySelector("#content")
    final.appendChild(pageInner)
}

export default buildHome;