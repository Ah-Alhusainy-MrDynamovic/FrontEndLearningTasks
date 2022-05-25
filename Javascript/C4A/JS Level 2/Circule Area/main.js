const calc = document.getElementById("calc");
const input = document.getElementById("input");
// raduis=2 is used when we call the function without params (i.e initiate value) like this :  area();
const area = (radius=1) => {
  let area = Math.PI * radius ** 2;
	calc.innerHTML = ` ${area.toFixed(2)} `;
};

input.addEventListener("change", () => {
	const r = input.value;
  area(r);
});
