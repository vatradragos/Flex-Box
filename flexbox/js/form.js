$("#form").submit(function (e) {
    e.preventDefault();

    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var errorOne = document.getElementById("error-1");
    var errorTwo = document.getElementById("error-2");
    var errorThree = document.getElementById("error-3");
    var errorFour = document.getElementById("error-4");

    if (username.value === "") {
        errorOne.style.display = "block";
        errorTwo.style.display = "none";
        username.style.boxShadow = "2px 2px 10px 5px red";
    } else {
        username.style.boxShadow = "2px 2px 10px 5px green";
        errorOne.style.display = "none";
        errorTwo.style.display = "none";
    }

    if (password.value === "") {
        errorThree.style.display = "block";
        errorFour.style.display = "none";
        password.style.boxShadow = "2px 2px 10px 5px red";
    } else {
        password.style.boxShadow = "2px 2px 10px 5px green";
        errorThree.style.display = "none";
        errorFour.style.display = "none";
    }

    if ((username.value)&&(password.value)) {
        window.open("events.html", "_self");
        username.style.boxShadow = "none";
        password.style.boxShadow = "none";
    }

});