



 






const youtube = document.getElementById("you");

const biggerContainer = document.querySelector(".bigger-contaier");

const kahyaan = document.getElementById("kahyaan")
const visa = document.getElementById("visa")









const buy = document.querySelectorAll(".js-buy");
console.log(buy)





buy.forEach(item => {
  
  item.addEventListener("click", (eo) => {
    biggerContainer.classList.add("active");
    eo.preventDefault();
  
    kahyaan.style.display = "none"
  
    visa.style.display = "block"
  })


});





 















const aywaa = document.querySelectorAll(".aywaa");



aywaa.forEach(item => {
  

item.addEventListener("click", (eo) => {
  

  kahyaan.style.display = "block"
  visa.style.display = "none"



setTimeout(() => {
  
  kahyaan.style.display = "none"
  biggerContainer.classList.remove("active");

}, 1000);


})



});



 




















youtube.addEventListener("click", (eo) => {
    eo.preventDefault()
})



const dark = document.getElementById("dark")
const body = document.getElementById("body")


dark.addEventListener("click", (eo) => {
  
  body.classList.toggle("dark")


})
