let gender = document.getElementsByName("gender").forEach(function (event) {
  event.addEventListener("change", function () {
    alert("You have selected" + " " + event.value + " " + "Gender");
  });
});
