const name = document.getElementById("firstName");
const surname = document.getElementById("lastName");
const email = document.getElementById("email");
const btn = document.getElementById("buttonForAlert");

btn.addEventListener("click", function () {
  const obj = {};

  obj["firstName"] = name.value;
  obj["lastName"] = surname.value;
  obj["email"] = email.value;
  alert(JSON.stringify(obj));
});
