var modal = document.getElementById("popModal");

var btn = document.getElementById("addbtn");

var span = document.getElementsByClassName("closebtn")[0];

var namesList = [];

var finalResult = [];

var outputlist = [];

var summarybtn = document.getElementById("submitbtn");

summarybtn.onclick = function ()
{

  console.log(namesList);
  len = namesList.length;
  console.log(len);
  inputPara = document.getElementById("textboxx").value;

  for (i = 0; i < len; i++) {

    console.log(namesList[i]);
    // find count 
    var abc = inputPara.split(namesList[i]).length - 1;
    console.log(abc);
    if (abc != null) {
      finalResult.push({ key: namesList[i], value: abc });
    }
  }

  for (l = 0; l < finalResult.length; l++) {

    console.log("Key is ", finalResult[l].key);
    console.log("value ", finalResult[l].value);

  }
  mykandho = document.getElementById("pallari");

  for (k = 0; k < finalResult.length; k++) {
    newli = document.createElement("p");
    newli.innerHTML = finalResult[k].key + " - " + finalResult[k].value;
    mykandho.appendChild(newli);
  }

  for(g = 0; g<len; g++)
  {
      var tablerow = document.createElement("tr");
      var tabledataone = document.createElement("td");
      var darshan = document.createTextNode(finalResult[g].key);
      var tabledatatwo = document.createElement("td");
      var lal = document.createTextNode(finalResult[g].value);

      tablerow.appendChild(tabledataone);
      tabledataone.appendChild(darshan);
      tabledatatwo.appendChild(lal);
      tablerow.appendChild(tabledatatwo);
  }

}

btn.onclick = function () {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function submit() {
  var para = document.createElement("li");
  para.innerHTML = document.getElementById("userinput").value;
  document.getElementById("givenName").appendChild(para);

  var inputValue = document.getElementById("userinput").value;
  namesList.push(inputValue);
}


