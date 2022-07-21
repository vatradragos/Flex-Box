function seemoreless(click) {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("text");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "SEE MORE"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "SEE LESS"; 
    moreText.style.display = "inline";
  }
}