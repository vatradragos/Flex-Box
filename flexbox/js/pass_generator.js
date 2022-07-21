function pass(event) {
    var password = document.getElementById("password");
    var randomPass = "";
    var possiblePass = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
  
    for (var i = 0; i < 10; i++)
      randomPass += possiblePass.charAt(Math.floor(Math.random() * possiblePass.length));
  
      password.value = randomPass;
  }