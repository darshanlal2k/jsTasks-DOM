let edits = "",
  comments = "",
  observer = "";
edits = document.getElementById("edited");
comments = document.getElementById("comments");
observer = new MutationObserver((records) => {
  edits.style.display = "block";
  console.log(records);
  console.log(records[0].oldValue);
});
observer.observe(comments, {
  attributes: true,
  attributeOldValue: true,
});
function edit_hide() {
  edits.style.display = "none";
}
