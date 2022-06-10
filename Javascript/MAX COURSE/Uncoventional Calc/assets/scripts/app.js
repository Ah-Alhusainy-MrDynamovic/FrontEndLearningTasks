const defaultResult = 0;
let currentResult = defaultResult;
let logEnteries=[]

// another method for initializing a variable for 1st status 
// let currentResult = 0;

// Functions
function getUserNumberInput() {
	if (userInput.value) {
		alert(`value is  not empty, Type is ${typeof parseInt(userInput.value)}  and value is ${userInput.value}`)
		return parseInt(userInput.value);
	}
	else { 
		alert(`value is empty ${typeof userInput.value}`)
	}
}
// log function that save all the history of trans

// ! Action to dynamcially return object of info without duplicating as it appears now at line 37 , ..ect 
const writeToReturnObjectInfo = (operatorIndentifier,prevResult,operandNumber,newResult) => {
	const logsObject= {
		operation: operatorIndentifier,
		prevResult: prevResult,
		operandNumber: operandNumber,
		afterResult:newResult
	}
	logEnteries.push(logsObject)
	console.log('logs: ', logEnteries);
}

// Use this when you uncommit line 32,50,70,88  to push array instead of abject

// let logHistory= function logs(x,y,z) {
// 	logEnteries.push([x,y,z])
// 	console.log('logs: ', logEnteries);
// 	console.log(typeof(logEnteries));	
// }
// function to get and write the logic of calculations => operators 
function logic(operator, first, reuslt) {
    const calcDesc = `${first} ${operator} ${reuslt}`
    outputResult(currentResult, calcDesc)

}

// Let's replace those two functions with more clean conditional code 
function calculateResult(math0perator) {
	const enteredNumberFromUser = getUserNumberInput()
	const initResult = currentResult
	let opp;
	if (math0perator === "ADD") {
		opp= '+'
		currentResult += enteredNumberFromUser
	} else if (math0perator==="SUB") {
		opp= "-"
    currentResult -= enteredNumberFromUser
	} else if (math0perator==="Multi") {
		opp= '*'
    currentResult *= enteredNumberFromUser	
	} else if (math0perator==="DIVIDE") {
			if (enteredNumberFromUser ===0 ) { alert(`value is  not empty but value is ${userInput.value} so we can't divide by 0`) }
		opp= '/'
    currentResult /= enteredNumberFromUser
	} else {
		window.alert (`PLease Input Valid Operator ${math0perator} is not valid`)
	}
		logic(opp, initResult, enteredNumberFromUser)
// logHistory(initResult,enteredNumberFromUser,currentResult)
		writeToReturnObjectInfo(math0perator,initResult,enteredNumberFromUser,currentResult)
}
function add() {
calculateResult("ADD")
}
function substra() {
calculateResult("SUB")
}
function multi() {
	calculateResult("Multi")
}
function divide() {
	calculateResult("DIVIDE")
}

// Events 
addBtn.addEventListener("click", add)
subtractBtn.addEventListener("click", substra)
multiplyBtn.addEventListener("click", multi)
divideBtn.addEventListener("click", divide)