var login = document.getElementById("login");
login.addEventListener("click", getValue);
function getValue() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  if (email === "") {
    alert("Email không được để trống");
  } else {
    location.href =
      "https://sunteco.vn/blog/monolithic-la-gi-so-sanh-monolithic-vs-microservices/";
  }
}