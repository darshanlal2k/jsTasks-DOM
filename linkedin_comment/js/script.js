function createElement(tagName, parentName) {
    let child = "";
    child = document.createElement(tagName);
    parentName.appendChild(child);
    return child;
}

function newTextareaValue() {
    textarea.value.length > 0 ? createComment(commentsList, textarea.value) : alert("Please Enter some comments in Text Box");
}

function createComment(parent, textareaValues) {
    let container = "",
        imageContainer = "",
        profilePicture = "",
        commentContainer = "",
        chatContainer = "",
        userNameContainer = "",
        userNameTiming = "";
    let userName = "",
        timing = "",
        currentTime = "",
        threeDots = "",
        message = "",
        likeReplyContainer = "",
        likeReplySubContainer = "",
        likeImageIcon = "";
    let likeBtn = "",
        verticalLine = "",
        replyBtnContainer = "",
        replyBtn = "",
        fragment = "",
        time = "";

    fragment = new DocumentFragment();
    time = new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' });

    container = createElement("div", fragment);
    container.setAttribute("class", "container");

    imageContainer = createElement("div", container);
    imageContainer.setAttribute("class", "imageContainer");

    profilePicture = createElement("img", imageContainer);
    profilePicture.setAttribute("src", "/images/index.jpg");
    profilePicture.setAttribute("class", "profilePicture");

    commentContainer = createElement("div", container);
    commentContainer.setAttribute("class", "commentContainer");

    chatContainer = createElement("div", commentContainer);
    chatContainer.setAttribute("class", "chatContainer");

    userNameTiming = createElement("div", chatContainer);
    userNameTiming.setAttribute("class", "userNameTiming");

    userNameContainer = createElement("div", userNameTiming);
    userNameContainer.setAttribute("class", "userNameContainer");

    userName = createElement("span", userNameContainer);
    userName.innerText = "Darshan";

    timing = createElement("div", userNameTiming);
    timing.setAttribute("class", "timingContainer");

    currentTime = createElement("h5", timing);
    currentTime.setAttribute("class", "currentTime");
    currentTime.innerText = time;

    threeDots = createElement("span", timing);
    threeDots.setAttribute("class", "threeDots");
    threeDots.innerText = "...";
    threeDots.addEventListener("click", editOptions);

    message = createElement("div", chatContainer);
    message.setAttribute("class", "message");

    content(textareaValues, message);

    likeReplyContainer = createElement("div", commentContainer);
    likeReplyContainer.setAttribute("class", "likeReplyContainer");

    likeReplySubContainer = createElement("div", likeReplyContainer);
    likeReplySubContainer.setAttribute("class", "likeReplySubContainer");

    likeImageIcon = createElement("div", likeReplySubContainer);
    likeImageIcon.setAttribute("class", "likeImageIcon");

    likeBtn = createElement("button", likeImageIcon);
    likeBtn.setAttribute("class", "likeBtn");
    likeBtn.innerText = "Like";
    likeBtn.addEventListener("click", likePictureShow);

    verticalLine = createElement("div", likeReplySubContainer);
    verticalLine.setAttribute("class", "verticalLine");
    verticalLine.innerText = "|";

    replyBtnContainer = createElement("div", likeReplySubContainer);
    replyBtnContainer.setAttribute("class", "replyBtnContainer");

    replyBtn = createElement("button", replyBtnContainer);
    replyBtn.setAttribute("class", "replyBtn");
    replyBtn.innerText = "Reply";
    replyBtn.addEventListener("click", replyComments);

    parent.prepend(fragment);
    textarea.value = "";
}

function replyComments(e) {
    let elementTarget = e.target;
    editFunction(elementTarget.closest(".likeReplyContainer"));
    return true;
}

function content(textareaValues, message) {
    let shortText = "",
        longText = "";

    if (textareaValues.length > 100) {
        shortText = document.createElement("span");
        shortText.setAttribute("class", "show");
        shortText.innerText = textareaValues.substring(0, 100);

        seeMoreThreeDots = seeMoreLess("... See More");
        shortText.appendChild(seeMoreThreeDots);
        message.appendChild(shortText);
    }
    longText = document.createElement("span");

    textareaValues.length > 100 ? longText.setAttribute("class", "hide") : longText.setAttribute("class", "show");

    longText.classList.add("longText");

    longText.innerText = textareaValues.substring(0, textareaValues.length);

    textareaValues.length > 100 ? longText.appendChild(seeMoreLess("... See Less")) : false;
    message.appendChild(longText);
}

function seeMoreLess(textareaValuesText) {
    let moreLess = "";

    moreLess = document.createElement("a");
    moreLess.setAttribute("href", "#/");
    moreLess.innerText = textareaValuesText;
    moreLess.addEventListener("click", e => {
        e.stopPropagation();

        if (e.target.innerText === "... See More") {
            e.target.parentElement.classList.add("hide");
            e.target.parentElement.classList.remove("show");
            e.target.parentElement.nextSibling.classList.remove("hide");
            e.target.parentElement.nextSibling.classList.add("show");
            return true;
        }
        if (e.target.innerText === "... See Less") {
            e.target.parentElement.classList.add("hide");
            e.target.parentElement.classList.remove("show");
            e.target.parentElement.previousSibling.classList.remove("hide");
            e.target.parentElement.previousSibling.classList.add("show");
            return true;
        }
    });
    return moreLess;
}

function editOptions(e) {
    let editMenu = "",
        cloneEditMenu = "",
        elementTarget = e.target;

    editMenu = document.getElementById("editMenu");
    cloneEditMenu = editMenu.cloneNode(true);
    elementTarget.appendChild(cloneEditMenu);
    show = document.querySelectorAll(".show");

    for (i = 0; i < show.length; i++) {
        show[i].classList.contains("show") ? show[i].classList.remove("show") : false;
    }
    cloneEditMenu.classList.add("show");
}

function editDeleteOptions(e) {
    let editDeleteContainer = "",
        elementTarget = e.target;

    editCommentList = elementTarget.closest(".commentList");
    editDeleteContainer = elementTarget.closest(".container");
    editLikeReplyContainer = elementTarget.closest(".likeReplyContainer");

    if (elementTarget.innerText === "Edit") {

        editCommentText = editDeleteContainer.querySelector(".longText").innerText;

        editFunction(editLikeReplyContainer, editCommentText);

        editCommentList.removeChild(editDeleteContainer);
        return true;
    }
    if (elementTarget.innerText === "Delete") {
        if (confirm("Are you sure to want to Delete?") == true) {
            editDeleteContainer.remove();
            return true;
        } else {
            return false;
        }
    }
}

function editFunction(deleteContainer, editEdit = "") {
    let editTextarea = "",
        editSubmitButtonContainer = "",
        editSubmitButton = "";
    if (deleteContainer == null) {
        textarea.value = seeLessSeeMoreText(editEdit);
    } else {
        if (deleteContainer.querySelector('.replyMap') == null) {
            reply = createElement("div", deleteContainer);
            reply.setAttribute("class", "replyMap");

            editTextarea = createElement("textarea", reply);
            editTextarea.setAttribute("cols", "30");
            editTextarea.setAttribute("rows", "5");

            editSubmitButtonContainer = createElement("div", reply);
            editSubmitButtonContainer.setAttribute("class", "submitBtnContainer");

            editSubmitButton = createElement("button", editSubmitButtonContainer);
            editSubmitButton.setAttribute("class", "submitButton");
            editSubmitButton.innerText = "Reply";

            deleteContainer.querySelector(".likeReplySubContainer").after(reply);

            editTextarea.value = seeLessSeeMoreText(editEdit);

            editSubmitButton.addEventListener("click", e => {
                appendingSubmitComment(e, editTextarea.value);
            });

            editTextarea.addEventListener("keypress", e => {
                if (e.keyCode === 13) {
                    appendingSubmitComment(e, editTextarea.value);
                    return true;
                }
            });
        }
    }
}

function seeLessSeeMoreText(totalLongText) {
    if (totalLongText.length > 100) {
        return totalLongText.substring(0, totalLongText.length - 12);
    } else {
        return totalLongText;
    }
}

function appendingSubmitComment(e, replyTextarea) {
    let targetReplyMap = "",
        parent = "",
        commentListChild = "",
        elementTarget = e.target;

    if (replyTextarea.length > 0) {
        targetReplyMap = elementTarget.closest(".replyMap");
        parent = targetReplyMap.parentElement;
        parent.removeChild(targetReplyMap);
        commentListChild = parent.querySelector(".commentList");

        if (commentListChild == null) {
            commentListChild = document.createElement("div");
            commentListChild.setAttribute("class", "commentList");
            parent.appendChild(commentListChild);
        }
        createComment(commentListChild, replyTextarea);
    } else {
        alert("Please Enter some comments in Text Box");
    }
}

function likePictureShow(e) {
    console.log(e);
    console.log(e.target);
    console.log(e.target.parentElement);
    let likeImage = "",
        likeCountContainer = "",
        likeCount = "",
        likeCountNumber = "",
        elementTarget = e.target;
    if (elementTarget.nextSibling == null) {
        likeImage = createElement("img", elementTarget.parentElement);
        likeImage.setAttribute("src", "https://static.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt");
        likeImage.setAttribute("class", "likeImage");

        likeCountContainer = createElement("span", elementTarget.parentElement);
        likeCountContainer.setAttribute("class", "likeCountContainer");
        likeCountContainer.innerText = "1";

        likeCount = elementTarget.parentElement.querySelector(".likeCountContainer").innerText;
        likeCountNumber = parseInt(likeCount);

        elementTarget.addEventListener("click", () => {
            likeCountNumber += 1;
            likeCountContainer.innerText = likeCountNumber;
        });
    }
}
(function() {
    let totalContainer = "",
        textareaContainer = "",
        submitButtonContainer = "",
        submitButton = "";

    totalContainer = document.getElementById("totalContainer");
    commentsList = document.getElementById("commentsList");

    textareaContainer = createElement("div", totalContainer);

    textarea = createElement("textarea", textareaContainer);
    textarea.setAttribute("class", "textarea");
    textarea.setAttribute("cols", "30");
    textarea.setAttribute("rows", "5");
    textarea.addEventListener("keypress", e => {
        if (e.keyCode === 13) {
            newTextareaValue();
            return true;
        }
    });
    submitButtonContainer = createElement("div", totalContainer);
    submitButtonContainer.setAttribute("class", "submitBtnContainer");

    submitButton = createElement("button", submitButtonContainer);
    submitButton.setAttribute("class", "submitButton");
    submitButton.innerText = "Submit";
    submitButton.addEventListener("click", newTextareaValue);
})();