// these usernames are taken
var taken_username = [];
var stored_passwords = [];
var logged_in = false;
function createAccount() {
  if (document.getElementById('formElement1').style.display == 'block') {
    
    document.getElementById('formElement1').style.display = 'none';
    document.getElementById('formElement2').style.display = 'block';
  }
   
  
}
function logIn() {
  if (document.getElementById('formElement2').style.display =="block"validate()) {
    storePassword(document.getElementById('rpwd').value, document.getElementById('username').value);
    logged_in = true;
    window.location = "index.html";
    
    
  }
  if (document.getElementById('formElement1').style.display =="block" && checkIfExists()) {
     
    logged_in = true;
    window.location = "index.html";
  } 
  
}

//This function compares the initial password with the re-entered password.
function validate(){
  
  // assigns x to the value in 're-password' lable.
  var x = document.getElementById('rpwd').value;
  console.log(String(x) + "x")
  // assigns y to the value in 'password' lable.
  var y = document.getElementById('passwd').value;
  console.log(String(y) + "y")
  // assigns username to the value given in 'username' lable.
  var username = document.getElementById('username').value;
  //These are flags used for checking if the username and password is valid. These will become true if they are.
  var isValadUsername = false;
  var isValadPassword = false;
  // includes method checks to see if the argument 'username' is in the list 'taken_username'.
  if(taken_username.includes(username) || username ===''){
    //onsubmit will be returned a false boolean if the username given is in the list. This also stops the submit from completing.
    alert("Invalid Username")
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
    alert("Your re-entered password does not match.")
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
    
function storePassword(password, username){
    console.log(password, username)
    stored_passwords.push([password, username]);
}
function checkIfExists() {
  stored_passwords.includes([document.getElementById('password'),document.getElementById('user')]);
}