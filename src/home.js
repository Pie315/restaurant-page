import ingredients from './Ingredients.png'



function buildLanding() {


    const image = new Image();
    image.src = ingredients

    image.classList.add("image")

    const container = document.querySelector("#content")
    container.textContent = "TESTTEST"
    console.log("Homerun")

    container.appendChild(image)

    

}

export default buildLanding;