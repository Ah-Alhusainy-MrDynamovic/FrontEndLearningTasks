// Array of User objects (Let Say it's a database list of Users )
var users = [
    { id: 1, name: "Ahmed", age: 23 },
    { id: 2, name: "Mohamed", age: 25 },
    { id: 3, name: "Yasser", age: 27 },
    { id: 4, name: "Tarek", age: 29 },
    { id: 5, name: "Ahmed", age: 29 },
    { id: 6, name: "Tarek Ahmed", age: 29 },
]; 

// Variables
let userName = document.getElementById("username")
let userAge = document.getElementById("userage")
let adduserBtn = document.getElementById("adduser")
let userList = document.getElementById("userlist")
let searchBtn = document.getElementById("search")

// Init functions/Actions Showing First the all users at the begining 
users.forEach(item => {
    userList.innerHTML += `<li>${item.name}, ${item.age}</li> `
	// <button> Delete </button> </li>
	
});

// Create the detele item 
let liUser= document.querySelectorAll("li")
liUser.forEach(li => {
	let delBtn= document.createElement("button")
	delBtn.innerHTML= "Delete"
	delBtn.classList.add("del")
	li.append(delBtn)
});

// Events


// Event for adding user and anfn to add 

// Method 1

// adduserBtn.addEventListener("click", (eo) => {
//     userList.innerHTML += `<li>${userName.value}, ${userAge.value}</li> `
//     userName.value = ""
//     userAge.value = ""
// })

// Method 2 
adduserBtn.onclick = addUser;


// Event for searching user and filter 

searchBtn.onchange = searchUser;
searchBtn.onkeyup = searchUser;
searchBtn.onclick = searchUser;




//Functions


// 1)Add Users direclty to HTML Element from the value that i get from the user 

// function addUser() {
//     let username = userName.value
//     let userage = +userAge.value
// 
//     userList.innerHTML += `<li>${username}, ${userage}</li> `
//     userName.value = ""
//     userAge.value = ""
// 
// }

// 2.adduser to list of objects then add those objects into HTML this is
function addUser() {
    var nameValue = userName.value;
    var ageValue = +userAge.value; // "30" => 30
    // id = Math.floor(Math.random() * 1000000)
    users.push({ id: users.length + 1, name: nameValue, age: ageValue });
    userName.value = ""
    userAge.value = ""
    listOfUsers(users)
}

function listOfUsers(items) {
    userList.innerHTML = "";
    items.forEach(item => {
        userList.innerHTML += `<li>${item.name}, ${item.age} </li>`
		
		
    });
}

// Deleting User

userList.addEventListener("click", (eo) => {
	if (eo.target.classList=="del") {
		eo.target.parentElement.remove()
	}
	else {
		console.log("kaka");
	}
})

// Filter
// Find
// FindIndex
// Searching Users in a list of objects 
function searchUser() {
	var searchValue = searchBtn.value; // ahmed
	var filteredUsers = [];
	for (var i = 0; i < users.length; i++) {
	  if (users[i].name.toLowerCase().includes(searchValue.toLowerCase())) {
		filteredUsers.push(users[i]);
	  }
	}
	listOfUsers(filteredUsers);
	// users
  }