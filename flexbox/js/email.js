function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  const $result = $("#result");
  const email = $("#email").val();
  $result.text("");

  if (validateEmail(email)) {
    $result.text(email + " Is a valid email. Well done! Now you will get the news in real time.");
    $result.css("color", "#fff");
    $result.css("margin-top", "20px");
    $result.css("font-weight", "bolder");
  } else {
    $result.text(email + " Is not a valid email adresse. Please try again!");
    $result.css("color", "#bd453c");
    $result.css("margin-top", "20px");
    $result.css("font-weight", "bolder");
  }
  return false;
}

$("#validate").on("click", validate);