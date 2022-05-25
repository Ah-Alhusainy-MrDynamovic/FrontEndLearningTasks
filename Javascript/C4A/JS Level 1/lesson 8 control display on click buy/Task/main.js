const buy = document.getElementsByClassName("btn")[0];
const aywaa = document.getElementsByClassName("btn")[1];
const youtube = document.getElementById("you");

const biggerContainer = document.querySelector(".bigger-contaier");

buy.addEventListener("click", (eo) => {
  biggerContainer.classList.add("active");
  eo.preventDefault();
});

aywaa.addEventListener("click", (eo) => {
  biggerContainer.classList.remove("active");
});


youtube.addEventListener("click", (eo) => {
    eo.preventDefault()
})
