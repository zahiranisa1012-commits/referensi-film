function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username === "admin" && password === "1234") {
    localStorage.setItem("login", "true");
    window.location.href = "home.html";
  } else {
    alert("Username atau password salah!");
  }
}

function cekLogin() {
  if (localStorage.getItem("login") !== "true") {
    window.location.href = "index.html";
  }
}

function logout() {
  localStorage.removeItem("login");
  window.location.href = "index.html";
}
