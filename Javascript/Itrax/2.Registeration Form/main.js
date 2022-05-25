const firstName = document.getElementById("first")
const lastName = document.getElementById("last")
const userName = document.getElementById("username")
const age = document.getElementById("age")
const email = document.getElementById("email")
const pass = document.getElementById("pass")
const signup = document.getElementById("signup")
const logIn = document.getElementById("logIn")
const usersTable = document.getElementById("tableOfUsers")
const formContainer = document.getElementById("form-wrapper")
const signupLabel = document.getElementById("signupLabel")
const loginLabel = document.getElementById("loginLabel")
const loginWrapper = document.getElementById("login-wrapper")
const containerPage = document.getElementById("container")

//Start Function
const addUser = () => {

        let fristInpt = firstName.value
        let lastInpt = lastName.value
        let userNameInpt = userName.value
        let ageInpt = age.value
        let emailInpt = email.value
        let passInpt = pass.value

        if (firstName.value == "" || lastName.value == '' || userName.value == '' || age.value == '' || pass.value == '') {
            alert("Please Fill Data")
        } else {
            usersTable.innerHTML += `
	   <tr>
            <td>${fristInpt}</td>
            <td>${lastInpt}</td>
            <td>${userNameInpt}</td>
            <td>${ageInpt}</td>
            <td>${emailInpt}</td>
            <td>${passInpt}</td>
        </tr>
`
            usersTable.style.display = "block"
            formContainer.style.display = "none"
            signupLabel.style.display = "none"
            loginLabel.innerText = " Go Back"
                //========Declaring Values to 0==========
            firstName.value = ""
            lastName.value = ""
            userName.value = ""
            age.value = ""
            email.value = ""
            pass.value = ""
                //============Call Back to default Status========
            loginLabel.onclick = function() {
                formContainer.style.display = "block"
                signupLabel.style.display = "block"
                loginLabel.innerText = "Login"
                usersTable.style.display = "none"
            }

        }





    }
    //Function Declation Method 1
signup.onclick = function() {
    addUser()
}

//Function Declation Method 2
//signup.onclick = addUser;

loginLabel.onclick = function() {
    if (loginLabel.innerText == "Login") {
        formContainer.style.display = "none"
        loginWrapper.style.display = "block"
        signupLabel.style.display = "block"
        signupLabel.innerText = " Go Back"
    }
}