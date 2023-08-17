let num = document.getElementById("onlyNumbers");
num.addEventListener("keypress", check);
function check(event) {
  if (event.keyCode > 47 && event.keyCode <= 57) {
    alert(
      "Entered Number is : " +
        event.key +
        "\n" +
        " Number's keycode is : " +
        event.keyCode
    );
  } else {
    event.preventDefault();
    alert("Enter Only Numbers");
  }
}
