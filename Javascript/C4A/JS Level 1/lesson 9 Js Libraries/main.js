const dia = document.querySelector(".container")
console.log(dia)
// alert(dia)
//===============
const buy = document.getElementById("buy")
buy.addEventListener("click",
    (eo) => {
        eo.preventDefault()
        cuteAlert({
            type: "success",
            title: "Success Title",
            message: "Success Message",
            buttonText: "Thanks"
        })

    }

)
// ================
// const ha = document.getElementById("ha")
// console.log(ha)
// ha.addEventListener("click",
//     (eo) => {
//         // dia.close()
//
//     }
//
//
//
// )