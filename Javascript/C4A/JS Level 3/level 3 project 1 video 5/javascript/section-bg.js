// change SECTION-BG when click on "section Bg"
// using array & i++
// level 3 lesson2 video #4
// const arrColors = ["#A0E7E5", "#FBE7C6", "#ffafcc"];
// let i = 0;

// sectionbg.addEventListener("click", (eo) => {
//   const allSections = document.querySelectorAll("section");

//   allSections.forEach((item) => {
//     console.log(i);
//     item.style.backgroundColor = arrColors[i];

//   });

//   i < arrColors.length - 1 ? i++ : i = 0;
// });



// change SECTION-BG when click on "section Bg"
// using array & Math.random()
// level3 lesson2 video #5
const arrColors = ["#A0E7E5", "#FBE7C6", "#ffafcc"];


sectionbg.addEventListener("click", (eo) => {
  const allSections = document.querySelectorAll("section");
  const random = Math.floor(  Math.random() * arrColors.length    );

  allSections.forEach((item) => {
    item.style.backgroundColor = arrColors[random];
  });

  console.log(random)
  
});







//  0        *3  => 0         0
// 0.99999   *3  => 2.9999    2




