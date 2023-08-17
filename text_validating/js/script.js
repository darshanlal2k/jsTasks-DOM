let focus_text = "",
  onchange_text = "",
  focusout_text = "";

focus_text = document.getElementById("text_focus");
onchange_text = document.getElementById("text_onchange");
focusout_text = document.getElementById("text_focusout");

focus_text.style.border = "1px solid black";
focus_text.addEventListener("focusin", textfocusin);
focus_text.addEventListener("focusout", textfocusout);

// text onchange

onchange_text.style.border = "1px solid black";
onchange_text.addEventListener("change", onchange_fun);

// text focusout

focusout_text.style.border = "1px solid black";
focusout_text.addEventListener("focusout", textfocusout);

function textfocusin(e) {
  e.target.style.backgroundColor = "red";
}

function textfocusout(e) {
  e.target.style.backgroundColor = "yellow";
  alert(e.target.value);
}

function onchange_fun(e) {
  alert(
    "Entered String is : " +
      e.target.value +
      "\n" +
      "Entered String Length is : " +
      e.target.value.length
  );
}
