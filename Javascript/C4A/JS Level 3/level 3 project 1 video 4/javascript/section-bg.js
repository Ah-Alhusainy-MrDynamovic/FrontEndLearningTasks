// change SECTION-BG when click on "section Bg"
const arrColors = ["#A0E7E5", "#FBE7C6", "#ffafcc"];
let i = 0;

sectionbg.addEventListener("click", (eo) => {
  const allSections = document.querySelectorAll("section");

  allSections.forEach((item) => {
    console.log(i);
    item.style.backgroundColor = arrColors[i];
  });

  i < arrColors.length - 1 ? i++ : i = 0;
});
