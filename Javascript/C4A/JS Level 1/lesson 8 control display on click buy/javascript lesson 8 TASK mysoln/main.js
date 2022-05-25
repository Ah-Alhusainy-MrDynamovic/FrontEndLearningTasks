const buy = document.getElementsByClassName("btn")[0]

buy.addEventListener("click", (eo) => {
    eo.preventDefault()
    eo.target.style.backgroundColor = "red"
    // const ahmed= document.querySelector ("div")
    const ahmed = document.getElementsByClassName("bigger-container")[0]
    console.log(ahmed)
    ahmed.style.display = "block"

})
const ahmed = document.getElementsByClassName("bigger-container")[0]
const tito = document.getElementById("ha")
tito.addEventListener("click",


    (eo) => {
        console.log(tito)
        ahmed.style.display = "none"


    }

)