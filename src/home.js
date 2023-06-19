import ingredients from './Ingredients.png'



function buildHome() {
    const pageInner = document.createElement("div")
    pageInner.classList.add("home")
    pageInner.classList.add("resetable")
    
    const image = new Image();
    image.src = ingredients
    image.classList.add("image")

    const blurb = document.createElement("h2")
    blurb.textContent = "About us"
    pageInner.appendChild(blurb)

    const message = document.createElement("p")
    message.textContent = "Here at Hollywood Diners we pride ourselves on maintaining the highest quality customer service. Our food is crafted with the highest quality GMO ingredients, and we cater to our customer's need such as vegan and gluten free options"
    pageInner.appendChild(message)


    pageInner.appendChild(image)


    const final = document.querySelector("#content")
    final.appendChild(pageInner)
}

export default buildHome;