function user(event) {
    var username = document.getElementById("username");
    var randomName = "";
    var possibleName = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
    for (var i = 0; i < 10; i++)
      randomName += possibleName.charAt(Math.floor(Math.random() * possibleName.length));
  
      username.value = randomName;
  }  