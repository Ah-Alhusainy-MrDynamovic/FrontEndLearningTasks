const dia = document.querySelector(".container")
console.log(dia)
// alert(dia)
//===============
const buy = document.getElementById("buy")
buy.addEventListener("click",
    (eo) => {
        // dia:backdrop.style.backgroundColor = "red"
        eo.preventDefault()
        // dia.show()
        // dia.close( )
        dia.showModal()

    }

)
// ================
const ha = document.getElementById("ha")
console.log(ha)
ha.addEventListener("click",
    (eo) => {
        dia.close()
        

    }



)