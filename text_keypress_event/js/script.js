let userName = document.getElementById("username");
userName.addEventListener("keypress", function () {
  checking_keypress(this);
});

function checking_keypress(event) {
  console.log(
    "Username is : " +
      " " +
      event.value +
      "\n" +
      "Username Length is : " +
      " " +
      event.value.length
  );
  alert(
    "Username is : " +
      " " +
      event.value +
      "\n" +
      "Username Length is : " +
      " " +
      event.value.length
  );
}
