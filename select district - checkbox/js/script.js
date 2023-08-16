let checkbox,
  checkboxes,
  values = [];

checkbox = document.getElementsByName("district");
console.log(checkbox);

for (i = 0; i < checkbox.length; i++) {
  checkbox[i].addEventListener("change", checking);
}

function checking() {
  checkboxes = document.querySelectorAll('input[name="district"]:checked');
  values = [];
  checkboxes.forEach((checkbox) => {
    values.push(checkbox.value);
  });
  alert("checked" + " " + values);
}
