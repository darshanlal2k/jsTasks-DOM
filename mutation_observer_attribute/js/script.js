let edits = document.getElementById("edited");
let comments = document.getElementById("comments");
let observer = new MutationObserver((records) => {
  edits.style.display = "block";
  console.log(records);
});
observer.observe(comments, {
  attributes: true,
});
function edit_hide() {
  edits.style.display = "none";
}
