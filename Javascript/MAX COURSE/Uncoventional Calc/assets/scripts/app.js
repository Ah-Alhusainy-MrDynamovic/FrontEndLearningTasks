const defaultResult = 0;
let currentResult = defaultResult;
let logEnteries=[]

// another method for initializing a variable for 1st status 
// let currentResult = 0;

// Functions

function getUserNumberInput() {
    return parseInt(userInput.value)
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
// Main Functions 
function add() {
    const enteredNumberFromUser = getUserNumberInput()
    const initResult = currentResult
    currentResult += enteredNumberFromUser
    logic('+', initResult, enteredNumberFromUser)
	// logHistory(initResult,enteredNumberFromUser,currentResult)
	writeToReturnObjectInfo("Add",initResult,enteredNumberFromUser,currentResult)

}

function substra() {
    const enteredNumberFromUser = getUserNumberInput()
    const initResult = currentResult
    currentResult -= enteredNumberFromUser
    logic('-', initResult, enteredNumberFromUser)
	// logHistory(initResult,enteredNumberFromUser,currentResult)
	writeToReturnObjectInfo("Substraction",initResult,enteredNumberFromUser,currentResult)


}
	


function multi() {
    const enteredNumberFromUser = getUserNumberInput()
    const initResult = currentResult
    currentResult *= enteredNumberFromUser
    logic('*', initResult, enteredNumberFromUser)
	// logHistory(initResult,enteredNumberFromUser,currentResult)
	writeToReturnObjectInfo("MultiPlying",initResult,enteredNumberFromUser,currentResult)
	
	
}

function divide() {
    const enteredNumberFromUser = getUserNumberInput()
    const initResult = currentResult
    currentResult /= enteredNumberFromUser
    logic('/', initResult, enteredNumberFromUser)
	// logHistory(initResult,enteredNumberFromUser,currentResult)
	writeToReturnObjectInfo("Devide",initResult,enteredNumberFromUser,currentResult)

	

}



// Events 
addBtn.addEventListener("click", add)
subtractBtn.addEventListener("click", substra)
multiplyBtn.addEventListener("click", multi)
divideBtn.addEventListener("click", divide)