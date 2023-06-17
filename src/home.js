import ingredients from './Ingredients.png'



function buildHome() {
    const image = new Image();
    image.src = ingredients

    image.classList.add("image")

    const container = document.querySelector("#content")

    container.appendChild(image)

}

export default buildHome;