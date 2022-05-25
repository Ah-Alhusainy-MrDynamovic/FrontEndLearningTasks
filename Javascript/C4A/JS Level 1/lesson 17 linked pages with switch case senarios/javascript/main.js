const youtube = document.getElementById("you");

const biggerContainer = document.querySelector(".bigger-contaier");

const kahyaan = document.getElementById("kahyaan");
const visa = document.getElementById("visa");

const buy = document.querySelectorAll(".js-buy");
 


const addProduct = document.querySelector("#add-pro");
const procontainer = document.querySelector("#pro-container");






addProduct.addEventListener("click" , (eo) => {
  
const newProduct =     `  

<div class="card mycard" style="width: 18rem;">
<img style="border-radius: 5px;" src="pexels-cottonbro-3826678.jpg" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">MY Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a id="buy" href="#"  class="js-buy btn btn-primary">buy</a>
 
</div>
</div>


`

procontainer.innerHTML += newProduct

})







 





// when i click on buy button
procontainer.addEventListener("click", (eo) => {
  
if (eo.target.classList == "js-buy btn btn-primary" ) {
      biggerContainer.classList.add("active");
    eo.preventDefault();

    kahyaan.style.display = "none";

    visa.style.display = "block";
}


})








const aywaa = document.querySelector(".aywaa");

 


aywaa.addEventListener("click", (eo) => {
  kahyaan.style.display = "block";
  visa.style.display = "none";

  setTimeout(() => {
    kahyaan.style.display = "none";
    biggerContainer.classList.remove("active");
  }, 1000);
})


















const dark = document.getElementById("dark");
const body = document.getElementById("body");

dark.addEventListener("click", (eo) => {
  body.classList.toggle("dark");
});





