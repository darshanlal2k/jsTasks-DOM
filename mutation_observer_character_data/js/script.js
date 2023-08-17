let comments = document.getElementById("comments");
let edits = document.getElementById("edited");
let observer = new MutationObserver((records) => {
  edits.style.display = "block";
  console.log(records);
  console.log(records[0].oldValue);
});
observer.observe(comments, {
  characterData: true,
  subtree: true,
});
function edit_hide() {
  edits.style.display = "none";
}
