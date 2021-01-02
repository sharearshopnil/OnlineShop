window.onload = function () {
    document.getElementById("password").onchange = validatePassword;
    document.getElementById("password1").onchange = validatePassword;
  }


  function validatePassword() {
    var pass2 = document.getElementById("password1").value;
    var pass1 = document.getElementById("password").value;
    if (pass1 != pass2)
      document.getElementById("password1").setCustomValidity("Passwords Don't Match");
    else
      document.getElementById("password").setCustomValidity('');
    //empty string means no validation error
  }

  
  const validate = { 
      validatepassword1(pass1, pass2){
    //var pass2 = document.getElementById("password1").value;
    //var pass1 = document.getElementById("password").value;
    if (pass1 != pass2)
      //document.getElementById("password1").setCustomValidity("Passwords Don't Match");
      return "Passwords Don't Match"
    else
      //document.getElementById("password").setCustomValidity('match');
      return "Match"
    //empty string means no validation error
  }
}  
    module.exports = validate;