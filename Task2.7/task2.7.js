const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const input_text_label = document.getElementById('input_text_label');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const input_text_labelValue = input_text_label.value.trim();


    if (usernameValue === '') {
        setErrorFor(username, 'Error username');
    } else {
        setSuccessFor(username);
    }


    if (input_text_labelValue === '') {
        setErrorFor(input_text_label, 'Error message informing me of a problem');
    } else {
        setSuccessFor(input_text_label);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Error password');
    } else if (passwordValue.length < 8) {
        setErrorFor(password, 'The password is incorrect');
    } else {
        setSuccessFor(password);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

document.addEventListener("DOMContentLoaded", function () {
    var toggleButton = document.getElementById("toggleButton");
    var content = document.getElementById("content");

    toggleButton.addEventListener("click", function () {
        toggleElement(content);
    });
});


function toggleElement(element) {
    if (element.classList.contains("off")) {
        element.classList.remove("off");
        element.classList.add("on");
        toggleButton.textContent = "Off";
    } else {
        element.classList.remove("on");
        element.classList.add("off");
        toggleButton.textContent = "On";
    }
}



