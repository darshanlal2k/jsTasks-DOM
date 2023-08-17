let message = "",
  totalCharacters = "";
message = document.getElementById("comments");

message.addEventListener("keypress", checking);

function checking(event) {
  totalCharacters = 19;
  if (event.target.value.length < 20) {
    alert(
      "Character is :" +
        event.key +
        "\n" +
        "Remaining Character is : " +
        (totalCharacters - event.target.value.length)
    );
  } else {
    alert("more than 20 characters");
    event.preventDefault();
  }
}
