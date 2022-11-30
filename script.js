window.onload = startUp;
function startUp(){
  setTheme(localStorage.getItem('Theme'))
  if(loggedIn()){
    document.getElementById('home_login').style.display = 'none';
    document.getElementById('home_logout').style.display = 'block';
  }
  else{
    document.getElementById('home_login').style.display = 'block';
    document.getElementById('home_logout').style.display = 'none';
    console.log("It is false")
  }
}
//if make account button is clicked then form 2 will appear
function makeAccount() {
  
  if (document.getElementById('formElement1').style.display == 'block') {
    
    document.getElementById('formElement1').style.display = 'none';
    document.getElementById('formElement2').style.display = 'block';
  }
   
  
}
//runs a prpcedure to log user in depending on the form they are on
function logIn() {
  
  if (document.getElementById('formElement2').style.display =="block" && validate()) {
    if(!checkIfExists("passwd", "username")){
      storeUser(document.getElementById('username').value);
      storeAccount(document.getElementById('rpwd').value, document.getElementById('username').value);
    }
    localStorage.logged_in = true;
    console.log(window.location.href)
    window.location.href = "/index.html";
    
    
  }
  if (document.getElementById('formElement1').style.display =="block" && checkIfExists("pwd", 'user')) {
    console.log("triggered") 
    localStorage.logged_in = true;
    document.getElementById('home_login').style.display = 'none';
    document.getElementById('home_logout').style.display = 'block';
    console.log(window.location.href)
    window.location = "/index.html";
  } 
  
}
//returns true if user is logged in
function loggedIn(){
  
  if (localStorage.getItem("logged_in") === "true"){
    return true;
  }
  else{
    return false;
  }

}
//sets local storage logged_in to false
function logOut(){

    localStorage.logged_in = false;
    document.getElementById('home_logout').style.display = 'none';
    document.getElementById('home_login').style.display = 'block';
  
}

//This function compares the initial password with the re-entered password to see if it is valid.
function validate(){
  
  // assigns x to the value in 're-password' lable.
  var x = document.getElementById('rpwd').value;
  console.log(String(x) + "x");
  // assigns y to the value in 'password' lable.
  var y = document.getElementById('passwd').value;
  console.log(String(y) + "y");
  // assigns username to the value given in 'username' lable.
  var username = document.getElementById('username').value;
  //These are flags used for checking if the username and password is valid. These will become true if they are.
  var isValadUsername = false;
  var isValadPassword = false;
  // includes method checks to see if the argument 'username' is in the list 'localStorage("stored_usernames")'.
  if (localStorage.getItem("stored_usernames").split("|").includes(username) || username ===''){
    //onsubmit will be returned a false boolean if the username given is in the list. This also stops the submit from completing.
    alert("Invalid Username");
    return false;
  }
  else{
    isValadUsername = true;
  }
  
  if(x==y){
     //If password is the same value to the re-entered password then the password will be valid.
    isValadPassword = true;
  }
  else{
    alert("Your re-entered password does not match.");
    return false;
  }
  //If both the password and the username are valid then return true and submit the form.
  if(isValadPassword && isValadUsername){
    return true;
  }
  else{
    return false;
  }
}
//stores account info    
function storeAccount(password, username){
    
    var temp = localStorage.getItem("stored_accounts")
    temp += "[" + username + "," + password + "]" + "|";
    localStorage.stored_accounts = temp;
    console.log(localStorage.getItem("stored_accounts"));
}
//checks to see if the password and username match
function checkIfExists(password, user) {
  var temp = localStorage.getItem("stored_accounts").split("|");
  var pword = document.getElementById(password).value;
  var user = document.getElementById(user).value;
  var stringrep = "[" + user + "," + pword + "]";
  var matches = false;
  var Return = false;
  // var index = 0;
  console.log(temp[2]);
  // var at_end = index == (temp.length-1);
  
  for (let i = 0; i < temp.length-1; i++) {
    if (temp[i] === stringrep){
      Return = true;
      matches = true;
    }
    else{
      console.log(i);
      
      
    }
}
    
    
  
  console.log(Return);
  return Return;
  
  
}
//stores username is the local storage
function storeUser(username){                                                              
  
  var temp = localStorage.getItem("stored_usernames")
  temp +=  username + "|";
  localStorage.stored_usernames = temp;
  console.log(localStorage.getItem("stored_usernames"))
}

console.log(String(localStorage.getItem("stored_usernames")));
console.log(String(localStorage.getItem("stored_accounts")));
console.log(String(localStorage.getItem("logged_in")));

function getTheme(){
  var header = document.getElementById("carousel6");
  
  var carousels = header.getElementsByClassName("active");
  

  var set = carousels[0].getElementsByTagName('img')[0];
  
  setTheme(set.src);
  
 
}
//its supposed to turn the background to the image selected but it just turns it white
function setTheme(url) {
  var set = localStorage.Theme = url 
  var bodies = document.getElementsByTagName('body');
  for (let i = 0; i < bodies.length; i++) {
    bodies[i].style.backgroundImage = "url('" + set + "')";
  }
}