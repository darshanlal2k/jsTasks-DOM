let district,
  selected = "",
  option = "";

district = document.getElementById("district");
district.addEventListener("change", function () {
  dropdown(this);
});

function dropdown(event) {
  selected = event.selectedIndex;
  option = event.options;
  alert("Index: " + option[selected].index + " is " + option[selected].text);
}
