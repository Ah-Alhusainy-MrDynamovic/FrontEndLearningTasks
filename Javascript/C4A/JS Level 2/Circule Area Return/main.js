
const calc = document.getElementById("calc")
const input = document.getElementById("input")

 
 

const area = (radius) => {
  return Math.PI * radius ** 2

}

 
input.addEventListener("change" ,() => {
  const r = input.value
  calc.innerHTML = area(r).toFixed(2)
})


 