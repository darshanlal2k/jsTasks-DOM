var user_name = document.getElementById("username");

user_name.addEventListener("keypress", username);
// var ab;

function username(event) {
    if (((event.keyCode > 64) && (event.keyCode <= 90)) || ((event.keyCode > 96) && (event.keyCode <= 122))) {
        return true;
    } else {
        event.preventDefault();
        alert("Enter Only Alphabets");
    }
};

var age = document.getElementById("age");
age.addEventListener("keypress", user_age);

function user_age(event) {
    if ((((event.keyCode > 48) && (event.keyCode <= 57))) && (age.value.length < 2)) {
        return true;
    } else {
        event.preventDefault();
        alert("Enter Only Numbers");
    }
};

var gender_value;
var gender = document.getElementsByName("gender").forEach(function(e) {
    e.addEventListener("change", function() {
        gender_value = e.value;
        // alert("You have selected" + " " + gender_value + " " + "Gender");
    });
});


var mobile = document.getElementById("mobile_number");
mobile.addEventListener("keypress", user_mobile);

function user_mobile(event) {
    if (((event.keyCode > 47) && (event.keyCode <= 57)) && (mobile.value.length < 10)) {
        return true;
    } else {
        event.preventDefault();
        alert("Enter Only Numbers");
    }
};

var aadhar = document.getElementById("aadhar_number");
aadhar.addEventListener("keypress", user_aadhar);

function user_aadhar(event) {
    if (((event.keyCode > 47) && (event.keyCode <= 57)) && (aadhar.value.length < 12)) {
        return true;
    } else {
        event.preventDefault();
        alert("Enter Only Numbers");
    }
};

var email = document.getElementById("email");
email.addEventListener("focusout", user_email);

function user_email() {
    const emailField = email.value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailField.match(mailformat)) {
        //  alert("Valid email address!");
        return true;
    } else {
        alert("You have entered an invalid email address!");
    }
};

var interest = document.getElementsByName("interest");
for (i = 0; i < interest.length; i++) {
    interest[i].addEventListener("change", user_interest);
};

var interest_values;
let interest_checked;

function user_interest() {
    interest_checked = document.querySelectorAll('input[name="interest"]:checked');
    interest_values = [];
    interest_checked.forEach((interest) => {

        interest_values.push(interest.value);
    });
    // alert(interest_values.length);
};

var state = document.getElementById("state");
state.addEventListener("change", function() { state_dropdown(this) });
// state.addEventListener("change", dropdown);
var state_selected;
var state_option;
var state_name;

function state_dropdown(event) {
    // console.log(event.target);
    state_selected = event.selectedIndex;
    state_option = event.options;
    state_name = state_option[state_selected];
    // alert("Index: " + state_option[state_selected].index + " is " + state_option[state_selected].text);
    // alert(state_name.value);
};

var district = document.getElementById("district");
district.addEventListener("change", function() { district_dropdown(this) });

var district_selected;
var district_option;

function district_dropdown(event) {
    district_selected = event.selectedIndex;
    district_option = event.options;
    district_name = district_option[district_selected];
    //  alert(district_name.value);
    // alert("Index: " + district_option[district_selected].index + " is " + district_option[district_selected].text);
}

var country = document.getElementById("Country");
country.addEventListener("keypress", user_country);

function user_country(event) {
    if (((event.keyCode > 64) && (event.keyCode <= 90)) || ((event.keyCode > 96) && (event.keyCode <= 122))) {
        return true;
    } else {
        event.preventDefault();
        alert("Enter Only Alphabets");
    }
};

var address = document.getElementById("address");
console.log(address);
address.addEventListener("change", user_address);

function user_address() {
    // alert(address.value);
};

var comments = document.getElementById("comments");
comments.addEventListener("change", user_comments);

var comments_value;

function user_comments(event) {
    // alert(event.value);
    // alert(comments_value = event.value);
};

var reset = document.getElementById("reset_btn");
reset.addEventListener("click", reset_all);

function reset_all() {
    document.getElementById("myForm").reset();
};

var submit = document.getElementById("submit_btn");
submit.addEventListener("click", submit_all);

function submit_all() {
    //console.log(document.body.form);
    // var total_form = document.getElementById("myform");
    //console.log(total_form.username.value);
    // console.log(x);
    if (user_name.value == '') {
        alert("please enter your Username");
    } else if (age.value == '') {
        alert("please enter your Age");
    }
    //console.log(x);
    else if ((gender_value == '') || (gender_value == undefined)) {
        alert("please enter your Gender");
    } else if (mobile.value == '') {
        alert("please enter your Mobile");
    } else if (aadhar.value == '') {
        alert("please enter your Aadhar");
    } else if (email.value == '') {
        alert("please enter your Email");
    } else if ((interest_values == '') || (interest_values == undefined)) {
        alert("please enter your Interest");
    } else if ((state_name.value == '') || (state_name.value == "none")) {
        alert("please enter your State");
    } else if ((district_name.value == '') || (district_name.value == "none")) {
        alert("please enter your District");
    } else if (country.value == '') {
        alert("please enter your Country");
    } else if (address.value == '') {
        alert("please enter your Address");
    } else if (comments.value == '') {
        alert("please enter your Comments");
    } else {
        //  alert("ok");


        alert(
            "Name is  :  " + " " + user_name.value + "\n" +
            "Age is :  " + " " + age.value + "\n" +
            "Gender is :  " + " " + gender_value + "\n" +
            "Mobile Number is : " + " " + mobile.value + "\n" +
            "Aadhar Number is : " + " " + aadhar.value + "\n" +
            "Email ID is : " + " " + email.value + "\n" +
            "Interested Area is : " + " " + interest_values + "\n" +
            "State is : " + " " + state_name.value + "\n" +
            "District is : " + " " + district_name.value + "\n" +
            "Country is : " + " " + country.value + "\n" +
            "Address is : " + " " + address.value + "\n" +
            "Comments is : " + " " + comments.value + "\n");
    }
};