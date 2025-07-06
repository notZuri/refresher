
function isLoggedIn(status){
    console.log(`Si user ay  ${status}`);
}

isLoggedIn(`naka login`);


    
    let isAdmin = true;

if (isAdmin) {
  alert("Welcome, Admin!");
} else {
  alert("Access denied.");
}


function logIn(username, password) {
  if (username === "Ian" && password === "12345") 
    console.log("Login successful");
   else {
    console.log("Login failed");
  }
}

logIn("Ian", "12345"); // ✅ Login successful




function login(inputUser, inputPass){
    if (inputUser === `Ian` && inputPass === `abc123`) {
        console.log(`Welcome, Ian!`)
    } else {
        console.log(`Invalid credentials.`);
    }
}

    login(`Ian`, `abc123`);