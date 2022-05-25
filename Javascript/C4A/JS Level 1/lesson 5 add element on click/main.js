// const myheader = document.querySelector(".myheader");
// const section = document.getElementById("sec");
// const main = document.getElementById("main");
// const mudiv = document.getElementById("mudiv");

// const title = document.createElement("h1");


// function eldawlya() {
//   mudiv.append(title);

//   title.classList.add("mb");

//   title.innerText = "الدولية للتجارة العالمية";
// }


// setTimeout(eldawlya, 6000)

//Lesson 2=========================


console.log('Hello my first JS Small task')
// ================
const ah = document.getElementById('buy')
const hasona = () => {



  const mudiv = document.getElementById("mudiv");
  const title = document.createElement("h1");
  mudiv.append(title)
  title.innerText = "الدولية للتجارة العالمية";
  title.classList.add('mb', 'mb-color');
  ah.classList.add('mb-color')
  ah.style.color = "black";
  ah.style.color = ("red");

}
ah.addEventListener('click', hasona)

// lesson 3===============================