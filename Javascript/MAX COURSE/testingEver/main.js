// 1) Dynamic and static node list (live and static)

// const staticList = document.querySelectorAll('div');
// const dynamicList = document.getElementsByTagName('div');
// btn.onclick = () => {
// 	document.body.insertAdjacentHTML( 'beforeend', '<div>Some text</div>' );
// 	console.log(staticList, dynamicList);
// }

const sec= document.querySelector("#sec")
const btn2= document.querySelector(".btn2")
let iii= sec.firstElementChild
btn2.addEventListener("click", (eo) => {
console.log("HHHHHHIIIIII from EVENT");
	// iii.innerHTML += ` <li>shdkshdlkhaslk</li> `
	iii.style.backgroundColor= 'yellow'
	// !Try Use quey Selector and tag name to see static and dynamic 
	iii.insertAdjacentHTML('afterend', '<div id="de">Some text</div>' );
	
})

// 2) Props and Attribute 
const inpButn= document.getElementById("inp")
console.log('inpButn: ', inpButn);

// 3) touch the difference between node and element 
let listOfElements= document.querySelector("html").childNodes
// let listOfElementsElemnts= document.querySelector("html")
// let bdy=listOfElements[1].childNodes
let bdy2=listOfElements[2].childNodes
// console.log('bdy2: ', bdy2);
// console.log('listOfElementsElemnts: ', listOfElementsElemnts);
// console.log(bdy);
bdy2.forEach(node => {
	console.log(node , node.nodeName, node.nodeType);
});