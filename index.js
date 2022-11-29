let admin = document.getElementById("admin");
admin.addEventListener("click", adminLogin);

function adminLogin() {
  let email = window.prompt("please enter your email");
  let password = window.prompt("please enter your password");

  if (email == null || password == null) {
    alert("Please fill correct credentials");

  }

  if (email === "admin@gmail.com" && password === "masai") {
      alert("Login successfully");
      window.location.href="./Admin/admin.html"
  } else {
    alert("please enter correct credentials");
    }
}