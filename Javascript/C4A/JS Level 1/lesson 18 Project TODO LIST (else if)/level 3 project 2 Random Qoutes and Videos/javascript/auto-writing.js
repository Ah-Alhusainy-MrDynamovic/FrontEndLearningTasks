// level3 lesson3 vide0 #1
// setInterval VS setTimeout

// let i = 1;
// const testFun = () => {
//   website.innerText = i;
//   i++;
// };

// const stopFun = setInterval(testFun, 1000);

// sec.addEventListener("click", (eo) => {
//   clearInterval(stopFun);
// });


// level3 lesson3 vide0 #2
//  JavaScript Auto writing Task

// let counter = 1;
// const autoWriting = () => {
//   const title = "Courses4Arab";
//   website.innerText = title.slice(0, counter);
//
//   counter++;
//
//   if (title.length < counter) {
//     counter = 1;
//   }
// };
//
// const stopAutoFun = setInterval(autoWriting, 300);

let i = 1
const hasonaWriting = () => {
  const text = " GIS Over-Flow , Courses4Arab "
  website.innerText = text.slice(0, i)
  i++
  if (text.length < i) {
    // clearInterval(stopFunc)
    i = 1;
  }
}
const stopFunc = setInterval(hasonaWriting, 300);























