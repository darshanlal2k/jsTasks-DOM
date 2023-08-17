let msg = document.getElementById("message");
msg.setAttribute("maxlength", 20);
msg.addEventListener("focusout", focusout);

function focusout(e) {
  alert(
    "Message is : " +
      " " +
      e.target.value +
      "\n" +
      "Message Length is : " +
      " " +
      e.target.value.length
  );
}
