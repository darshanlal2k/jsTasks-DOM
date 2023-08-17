let text = "",
  showTooltip = "",
  hideTooltip = "";

text = document.querySelectorAll("h3");

for (i = 0; i < text.length; i++) {
  text[i].addEventListener("mouseover", function () {
    show(this);
  });
  text[i].addEventListener("mouseout", hide);
}

function show(e) {
  showTooltip = document.createElement("span");

  e.parentElement.style.position = "relative";
  e.parentElement.append(showTooltip);

  showTooltip.style.left = "40px";
  showTooltip.style.top = "-40px";

  showTooltip.innerText = e.innerText;
}

function hide(e) {
  console.log(e.target.closest("body").querySelectorAll("span"));
  hideTooltip = e.target.closest("body").querySelectorAll("span");
  hideTooltip.forEach((element) => {
    element.remove();
  });
}
