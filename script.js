//This function compares the initial password with the re-entered password.
function validate(){
  // these usernames are taken
  const taken_username = ["Harry", "Elizabeth","Shana"];
  // assigns x to the value in 're-password' lable.
  var x = document.getElementById('re-password').value;
  // assigns y to the value in 'password' lable.
  var y = document.getElementById('password').value;
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
    return false
  }
  //If both the password and the username are valid then return true and submit the form.
  if(isValadPassword && isValadUsername){
    //trying to set the cells to whatever was submitted
    document.getElementById("cell1").innerHTML =  document.getElementById('FirstName').value
    document.getElementById("cell2").innerHTML = document.getElementById('LastName').value
    document.getElementById("cell3").innerHTML = document.getElementById('year').value
    document.getElementById("cell4").innerHTML = document.getElementById('phone').value
    document.getElementById("cell5").innerHTML = document.getElementById('e-mail').value
    document.getElementById("cell6").innerHTML = document.getElementById('username').value
    document.getElementById("cell7").innerHTML = document.getElementById('password').value
    document.getElementById("cell8").innerHTML = document.getElementById('re-password').value
    return true;
  }
  else{
    return false;
  }
    
}