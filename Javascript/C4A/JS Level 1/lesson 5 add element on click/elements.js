let listOfElements= document.querySelector("html").childNodes
let bdy=listOfElements[1].childNodes
console.log(bdy);
bdy.forEach(node => {
	console.log(node , node.nodeName, node.nodeType);
});