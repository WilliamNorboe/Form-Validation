const form = document.querySelector("form");
const email = document.getElementById("mail");
const error = email.nextElementSibling;
const country = document.getElementById("country");
const zip = document.getElementById("zip");
const pass = document.getElementById("pass");
const conpass = document.getElementById("conpass");

// As per the HTML Specification
const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const zipRegExp = /^\d{5}(?:[-\s]\d{4})?$/;

window.addEventListener("load", () => {
  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  email.className = isValid ? "valid" : "invalid";
});

// This defines what happens when the user types in the field
email.addEventListener("input", () => {
  const isValid = email.value.length !== 0 && emailRegExp.test(email.value);
  if (isValid) {
    email.className = "valid";
    error.textContent = "";
    error.className = "error";
  } else {
    email.className = "invalid";
  }
});

country.addEventListener("input", () => {
  const isValid = country.value.length != 0;
  if (isValid) {
    country.className = "valid";
    country.nextElementSibling.textContent = "";
    country.nextElementSibling.className = "error";
  } else {
    country.className = "invalid";
  }
});

zip.addEventListener("input", () => {
  const isValid = zip.value.length !== 0 && zipRegExp.test(zip.value);
  if (isValid) {
    zip.className = "valid";
    zip.nextElementSibling.textContent = "";
    zip.nextElementSibling.className = "error";
  } else {
    zip.className = "invalid";
  }
});

pass.addEventListener("input", () => {
  const isValid = pass.value.length >= 5;
  if (isValid) {
    pass.className = "valid";
    pass.nextElementSibling.textContent = "";
    pass.nextElementSibling.className = "error";
  } else {
    pass.className = "invalid";
  }
});
// This defines what happens when the user tries to submit the data
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let submit = true;
  let isValid = email.value.length !== 0 && emailRegExp.test(email.value);
  if (!isValid) {
    email.className = "invalid";
    error.textContent = "I expect an email";
    error.className = "error active";
    submit = false;
  } else {
    email.className = "valid";
    error.textContent = "";
    error.className = "error";
  }

  isValid = country.value.length !== 0;
  if (!isValid) {
    country.className = "invalid";
    country.nextElementSibling.textContent = "I expect a country";
    country.nextElementSibling.className = "error active";
    submit = false;
  } else {
    country.className = "valid";
    country.nextElementSibling.textContent = "";
    country.nextElementSibling.className = "error";
  }

  isValid = zip.value.length !== 0 && zipRegExp.test(zip.value);
  if (!isValid) {
    zip.className = "invalid";
    zip.nextElementSibling.textContent = "I need a valid zip code";
    zip.nextElementSibling.className = "error active";
    submit = false;
  } else {
    zip.className = "valid";
    zip.nextElementSibling.textContent = "";
    zip.nextElementSibling.className = "error";
  }

  isValid = pass.value.length >= 5;
  if (!isValid) {
    pass.className = "invalid";
    pass.nextElementSibling.textContent = "Password must be at least 5 characters";
    pass.nextElementSibling.className = "error active";
    submit = false;
  } else {
    pass.className = "valid";
    pass.nextElementSibling.textContent = "";
    pass.nextElementSibling.className = "error";
  }

  isValid = conpass.value == pass.value;
  if (!isValid) {
    conpass.className = "invalid";
    conpass.nextElementSibling.textContent = "Password's do not match";
    conpass.nextElementSibling.className = "error active";
    submit = false;
  } else {
    conpass.className = "valid";
    conpass.nextElementSibling.textContent = "";
    conpass.nextElementSibling.className = "error";
  }

  if(submit){
    console.log("high five");
  }
  
});
