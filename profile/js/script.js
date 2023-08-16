let mainContainer = "",
  container = "",
  imageContainer = "",
  image = "",
  userId = "",
  userName = "",
  mobileNumber = "",
  emailId = "";

//created for entire container
mainContainer = document.createElement("div");
mainContainer.style.width = "100%";
document.body.append(mainContainer);


// created for to write article
container = document.createElement("div");
container.style.width = "100%";
container.style.color = "white";
container.style.margin = "40px auto";
container.style.borderRadius = "10px";
mainContainer.append(container);

// created for profile container
imageContainer = document.createElement("div");
imageContainer.style.width = "20%";
imageContainer.style.backgroundColor = "rgba(87, 192, 216, 0.15)";
imageContainer.style.margin = "20px auto";
imageContainer.style.textAlign = "center";
imageContainer.style.borderRadius = "20px";
imageContainer.style.padding = "10px";
imageContainer.style.color = "black";
imageContainer.style.fontWeight = "700";
imageContainer.style.boxShadow = "#cac7c7 0px 0px 20px";
container.append(imageContainer);

//image
image = document.createElement("img");
image.src = "/jsTasks-DOM/profile/images/avator_icon.png";
image.setAttribute("height", "100px");
image.setAttribute("width", "100px");
image.style.borderRadius = "50px";
image.style.margin = "20px auto";
imageContainer.append(image);

//User id
userId = document.createElement("p");
userId.innerText = "User Id : 12345";
userId.style.fontSize = "18px";
imageContainer.append(userId);

//User name
userName = document.createElement("p");
userName.innerText = "Username : Darshan Lal";
userName.style.fontSize = "18px";
imageContainer.append(userName);

//mobile number
mobileNumber = document.createElement("p");
mobileNumber.innerText = "Mobile Number : 8834852738";
mobileNumber.style.fontSize = "18px";
imageContainer.append(mobileNumber);

// email id
emailId = document.createElement("p");
emailId.innerText = "Email Id : darshanlal@gmail.com";
emailId.style.fontSize = "18px";
imageContainer.append(emailId);
