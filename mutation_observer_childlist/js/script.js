let msg = document.getElementById("message");
let edits = document.getElementById("edited");
let observer = new MutationObserver((records) => {
  edits.style.display = "block";
  console.log(records);
});
observer.observe(msg, {
  childList: true,
});
function edit_hide() {
  edits.style.display = "none";
}
