const input = document.getElementById("input");
const img = document.getElementById("img");

const regEmail  =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const regPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;



input.addEventListener("keyup", (eo) => {
  if (regEmail.test(input.value)) {
    input.classList.remove("error");
    input.classList.add("success");
    img.setAttribute("src", "Image 6.png")
  } else {
    input.classList.remove("success");
    input.classList.add("error");
    img.setAttribute("src", "Image 5.png")

  }
});