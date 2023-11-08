var username = document.getElementById("nameInputId");

var userage = document.getElementById("ageInputId");

var usercourse = document.getElementById("courseclass");

var usersex = document.getElementById("sexclass");

var useraddress = document.getElementById("addressclass");

var usermail = document.getElementById("emailInputId");

var subtmitbtn = document.getElementById("validbtn");

var userform = document.getElementById("form-id");

var letter = /^[A-Za-z]+$/;

var num = /^[0-9]+$/;

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

var addformat = /^[0-9a-zA-Z]+$/;

function validateinput() {
    var usernameValue = username.value.trim();
    var userageValue = userage.value.trim();
    var usercourseValue = usercourse.value.trim();
    var usersexValue = usersex.value.trim();
    var useraddressValue = useraddress.value.trim();
    var usermailValue = usermail.value.trim();

    /*----name--- */

        if (usernameValue === '') {
            alert("plz enter name");
        }

        else if (usernameValue.match(letter)) {

            alert("entered correctly");
        }

        else {
            alert("only write letters");
        }

    /*----age--- */

    if (userageValue === '') {
        alert("please enter age");
    }

    else if (userageValue.match(num)) {

        userage.focus();
    }

    else {
        alert("please enter number");
    }

    /*----course--- */

    if (usercourseValue === '') {
        rederror(usercourse, 'please select college');
    }
    else {
        greensuccess(usercourse);
    }

    /*----sex--- */

    if (usersexValue === '') {
        rederror(usersex, 'please select sex');
    }
    else {
        greensuccess(usersex);
    }

    /*----address--- */
    if (useraddressValue === '') {
        alert("please enter address");
    }
    else if (useraddressValue.match(addformat)) 
    {

    }
    else {
        alert("address doesn't valid");
    }

    /*----mail--- */
    if (usermailValue === '') {
        alert("please enter mail");
    }
    else if (usermailValue.match(mailformat)) {

    }
    else {
        alert("invalid mail");
    }

    function rederror() {
        alert("invalid");
    }

    function greensuccess() {
        alert("valid");
    }

}


function abcd ()
{
   get object of textb1
   get the value from textb1
   check if it is empty
   if yes -> alert 
   
   get object of age 
   get the value from age
   check if it is empty
   if yes -> alert
   else  check if it not a number then alert

   
}



/*
if(!username || !useage || useraddress || usermail)
{
    alert("please enter all the boxes");
}






*/




























