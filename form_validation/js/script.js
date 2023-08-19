var username = "",
  age = "",
  gender_value = "",
  gender = "",
  mobile = "",
  aadhar = "",
  email = "",
  interestArea = "",
  state = "",
  country = "",
  interestValues = "",
  interestChecked = "",
  stateSelected = "",
  stateOption = "",
  stateName = "",
  district = "",
  districtSelected = "",
  districtOption = "",
  districtName = "",
  address = "",
  comments = "",
  comments_value = "",
  reset = "",
  submit = "",
  emailFormat = "",
  form = "";

username = document.getElementById("username");
age = document.getElementById("age");
mobile = document.getElementById("mobile_number");
aadhar = document.getElementById("aadhar_number");
email = document.getElementById("email");
interestArea = document.getElementsByName("interestArea");
state = document.getElementById("state");
country = document.getElementById("Country");
interestValues = [];
district = document.getElementById("district");
address = document.getElementById("address");
comments = document.getElementById("comments");
comments_value;
reset = document.getElementById("reset_btn");
submit = document.getElementById("submit_btn");
emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
form = document.getElementById("myForm");

username.addEventListener("keypress", userName);
age.addEventListener("keypress", userAge);
mobile.addEventListener("keypress", userMobile);
aadhar.addEventListener("keypress", userAadhar);
email.addEventListener("focusout", userEmail);
country.addEventListener("keyup", userCountry);
comments.addEventListener("change", userComments);
address.addEventListener("change", userAddress);
reset.addEventListener("click", resetAll);
submit.addEventListener("click", submitAll);

gender = document.getElementsByName("gender").forEach(function (e) {
  e.addEventListener("change", function () {
    gender_value = e.value;
    // alert("You have selected" + " " + gender_value + " " + "Gender");
  });
});

for (i = 0; i < interestArea.length; i++) {
  interestArea[i].addEventListener("change", userInterestArea);
}

state.addEventListener("change", function () {
  chooseState(this);
});

district.addEventListener("change", function () {
  chooseDistrict(this);
});

function userCountry(event) {
  if (
    (event.keyCode > 64 && event.keyCode <= 90) ||
    (event.keyCode > 96 && event.keyCode <= 122)
  ) {
    console.log(event.target.value);
    return true;
  } else {
    event.preventDefault();
    alert("Enter Only Alphabets");
  }
}

function userAddress(event) {
  console.log(event.target.value);
}

function userComments(event) {
  console.log(event.target.value);
}

function resetAll() {
  form.reset();
}

function submitAll(event) {
  console.log(event.target.value);
  // var total_form = document.getElementById("myform");
  console.log(form.username.value);
  // console.log(x);
  if (username.value == "") {
    alert("please enter your Username");
  } else if (age.value == "") {
    alert("please enter your Age");
  }
  //console.log(x);
  else if (gender_value == "" || gender_value == undefined) {
    alert("please enter your Gender");
  } else if (mobile.value == "") {
    alert("please enter your Mobile");
  } else if (aadhar.value == "") {
    alert("please enter your Aadhar");
  } else if (email.value == "") {
    alert("please enter your Email");
  } else if (interestValues == "" || interestValues == undefined) {
    alert("please enter your Interest");
  } else if (stateName.value == "" || stateName.value == "none") {
    alert("please enter your State");
  } else if (districtName.value == "" || districtName.value == "none") {
    alert("please enter your District");
  } else if (country.value == "") {
    alert("please enter your Country");
  } else if (address.value == "") {
    alert("please enter your Address");
  } else if (comments.value == "") {
    alert("please enter your Comments");
  } else {
    //  alert("ok");

    alert(
      "Name is  :  " +
        " " +
        username.value +
        "\n" +
        "Age is :  " +
        " " +
        age.value +
        "\n" +
        "Gender is :  " +
        " " +
        gender_value +
        "\n" +
        "Mobile Number is : " +
        " " +
        mobile.value +
        "\n" +
        "Aadhar Number is : " +
        " " +
        aadhar.value +
        "\n" +
        "Email ID is : " +
        " " +
        email.value +
        "\n" +
        "Interested Area is : " +
        " " +
        interestValues +
        "\n" +
        "State is : " +
        " " +
        stateName.value +
        "\n" +
        "District is : " +
        " " +
        districtName.value +
        "\n" +
        "Country is : " +
        " " +
        country.value +
        "\n" +
        "Address is : " +
        " " +
        address.value +
        "\n" +
        "Comments is : " +
        " " +
        comments.value +
        "\n"
    );
  }
}

function userName(event) {
  if (
    (event.keyCode > 64 && event.keyCode <= 90) ||
    (event.keyCode > 96 && event.keyCode <= 122)
  ) {
    return true;
  } else {
    event.preventDefault();
    alert("Enter Only Alphabets");
  }
}

function userAge(event) {
  if (event.keyCode > 48 && event.keyCode <= 57 && age.value.length < 2) {
    return true;
  } else {
    event.preventDefault();
    alert("Enter Only Numbers");
  }
}

function userMobile(event) {
  if (
    event.keyCode > 47 &&
    event.keyCode <= 57 &&
    event.target.value.length < 10
  ) {
    return true;
  } else {
    event.preventDefault();
    alert("Enter Only Numbers");
  }
}

function userAadhar(event) {
  if (
    event.keyCode > 47 &&
    event.keyCode <= 57 &&
    event.target.value.length < 12
  ) {
    return true;
  } else {
    event.preventDefault();
    alert("Enter Only Numbers");
  }
}

function userEmail(event) {
  if (event.target.value.match(emailFormat)) {
    return true;
  } else {
    alert("You have entered an invalid email address!");
  }
}

function userInterestArea() {
  interestChecked = document.querySelectorAll(
    'input[name="interestArea"]:checked'
  );
  interestValues = [];
  interestChecked.forEach((interestArea) => {
    interestValues.push(interestArea.value);
  });
  console.log(interestValues);
}

function chooseState(event) {
  stateSelected = event.selectedIndex;
  stateOption = event.options;
  stateName = stateOption[stateSelected];
}

function chooseDistrict(event) {
  districtSelected = event.selectedIndex;
  districtOption = event.options;
  districtName = districtOption[districtSelected];
  console.log(districtName.value);
  console.log(districtOption[districtSelected].index);
  console.log(districtOption[districtSelected].text);
}
