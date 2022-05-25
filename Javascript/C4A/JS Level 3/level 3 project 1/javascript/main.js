//  toggle the light & dark mode
{
  const dark = document.getElementById("dark");
  const body = document.getElementById("body");

  dark.addEventListener("click", (eo) => {
    body.classList.toggle("dark");
  });
}

//  when hover on  HEADER => change-color
// please note that we we must get element first as using directly id is not supported in all browsers
{changecolor.addEventListener("mousemove", (eo) => {
  hiddenul.style.display = "block";
});

changecolor.addEventListener("mouseout", (eo) => {
  hiddenul.style.display = "none";
});}

// When Click, change randomly the color 
const headerbg = document.getElementById("headerbg")
const header = document.querySelector(".myheader")
console.log(header)
headerbg.addEventListener("click", (eo) => {
  let HUE = ((Math.random() * 360)).toFixed()
  let SATURATION = ((Math.random() * 100)).toFixed()
  let LIGHTNESS = ((Math.random() * 100)).toFixed()
  let satPercent = `${SATURATION}% `
  let LightPercent = `${LIGHTNESS}% `
  header.style.backgroundColor = `hsl(${HUE}, ${satPercent}, ${LightPercent})`
  const websiteTitle = document.querySelector("#body > header > div > h1")
  websiteTitle.style.backgroundColor = `hsl(${HUE}, ${satPercent}, ${LightPercent})`
  // Use Id get Directly
  dark.style.backgroundColor = `hsl(${Math.round(Math.random() * 360)}, 70%, 25%) `

});
// Change Title Background when click
const titlebg = document.getElementById("titlebg")
titlebg.addEventListener ("click", (eo) => {
  const allTitle = document.querySelectorAll("h1:not(#body > header > div > h1)")
        let HUE = ((Math.random() * 360)).toFixed()
        let SATURATION = ((Math.random() * 100)).toFixed()
        let LIGHTNESS = ((Math.random() * 100)).toFixed()
        let satPercent = `${SATURATION}% `
        let LightPercent = `${LIGHTNESS}% `
  allTitle.forEach(title => {
    title.style.backgroundColor = `hsl(${HUE}, ${satPercent}, ${LightPercent})`
  });
})

// Changeing the text color using return of a function 
let changeColor = () => {
    let HUE = ((Math.random() * 360)).toFixed(),
    SATURATION = ((Math.random() * 100)).toFixed() , 
  LIGHTNESS = ((Math.random() * 100)).toFixed() , 
    satPercent = `${SATURATION}% ` , 
    LightPercent = `${LIGHTNESS}% ` 
  return [HUE, satPercent, LightPercent]
}
console.log(changeColor())
// get titlecolor Id directly
titlecolor.addEventListener("click", (eo) => {
  const allTitle = document.querySelectorAll("h1:not(#body > header > div > h1)")
  console.log(allTitle)
  let c1 = changeColor()[0], 
    c2 = changeColor()[1], 
    c3 = changeColor()[2]
  allTitle.forEach(title => {
    // title.style.color = `hsl(${changeColor()[0]}, ${ changeColor()[1]}, ${changeColor()[2]})`
    title.style.color = `hsl(${c1}, ${c2}, ${c3})`
  // Here for each item he will pick a different color while excuting function
  // The Solon is to take return values out of foreach item
  });
})
// I will use another method by making a function return color value itself
let changeColor2 = () => {
  let HUE = ((Math.random() * 360)).toFixed()
    let SATURATION = ((Math.random() * 100)).toFixed()
    let  LIGHTNESS = ((Math.random() * 100)).toFixed()
    let satPercent = `${SATURATION}% `
  let  LightPercent = `${LIGHTNESS}% `
  let colorvich = `hsl(${HUE}, ${satPercent}, ${LightPercent})`
  return colorvich
}
console.log(changeColor2())
const norm = document.querySelector("#sec > div > article.right-section > p")
console.log(norm)
norm.addEventListener("mouseover", (eo) => {
  norm.style.color = changeColor2()
  norm.style.fontSize = "40px"
})
norm.addEventListener("mouseout", (eo) => {
  norm.style.fontSize = "20px"
})



//Change the section BGC 

{
  // const sec = document.getElementById("sec")
// console.log(sec)
// use id directly
// console.log(sectionbg)
        {
      // changing the first section that has id only
      // sectionbg.addEventListener("click", (eo) => {
      //   sec.style.backgroundColor = changeColor2()
      // })
        }
        {
      // changing all sections with same color
      // const sections = Array.from(document.getElementsByTagName("section"))
      // console.log(sections)
      // sectionbg.addEventListener("click", (eo) => {
      //   const fixColor = changeColor2()
      //   console.log(fixColor)
        //  sections.forEach(section => {
        //     section.style.backgroundColor = fixColor
        //  });
        // })
        }
}


// Change Background color with list of determined colors from @Coolers.co using array ++
{
  
// const sections = Array.from(document.getElementsByTagName("section"))
// const colorList = ["#000814", "#001d3d", "#540b0e", "#081c15", "#dddf00"]
// let colorIndex= 0
//   sectionbg.addEventListener("click", (eo) => {
//     sections.forEach(
//       section => {
//         console.log(colorIndex)
//         section.style.backgroundColor = colorList[colorIndex]
//       });
      // Use This if condition to reset index
              {
    // colorIndex++ 
    // if (colorIndex > colorList.length-1) {
    //   colorIndex = 0
    // }
              }
      // Another Way if else
              {
                //   if (colorIndex < colorList.length-1) {
                //   colorIndex++
                // }
                // else {
                //   colorIndex=0
                // }
              }
      // Third way to write if condition : shorthand
    // if colorIndex < colorList.length - 1 ? colorIndex++ : colorIndex = 0 
  // })
}

// Changing BGC of sections using random color list  using math.random() 
const sections = Array.from(document.getElementsByTagName("section"))
const colorList = ["#000814", "#001d3d", "#540b0e", "#081c15", "#dddf00"]
sectionbg.addEventListener("click", (eo) => {
                const randomColor = Math.floor(Math.random() * colorList.length)
                // const randomColor= Math.round(Math.random()* (colorList.length-1))
          sections.forEach(
            section => {

              section.style.backgroundColor = colorList[randomColor]
            });
              console.log(randomColor)
            });
  