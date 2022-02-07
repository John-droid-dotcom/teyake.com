import { Teacher } from "../core.js";
("use strict");

const fullName = document.getElementById("fullname-input");
const phoneNo = document.getElementById("phone-input");
const email = document.getElementById("email-input");
const instit = document.getElementById("institution-input");
const signupBtn = document.getElementById("signup-btn");

let allTeachers = [];
if (!!localStorage.getItem("teachers")) {
  allTeachers = JSON.parse(localStorage.getItem("teachers"));
}

console.log(allTeachers);
let teacher = new Teacher();
console.log(teacher);
signupBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (
    fullName.value === "" ||
    phoneNo.value === "" ||
    email.value === "" ||
    instit.value === ""
  ) {
    alert("empty field");
    return;
  }

  teacher.email = email.value;
  teacher.name = fullName.value;
  teacher.id = allTeachers.length + 1;
  teacher.phone = phoneNo.value;
  teacher.institution = instit.value;
});