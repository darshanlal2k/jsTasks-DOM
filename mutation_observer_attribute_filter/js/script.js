let edits = "",
  comments = "",
  observer = "";
edits = document.getElementById("edited");
comments = document.getElementById("comments");
observer = new MutationObserver((records) => {
  edits.style.display = "block";
  console.log(records);
});
observer.observe(comments, {
  attributes: true,
  attributeFilter: ["name", "id"],
});
function edit_hide() {
  edits.style.display = "none";
}
