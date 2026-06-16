function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  let fixedUsername = "huanrose@gmail.com";
  let fixedPassword = "123456";

  if (username === fixedUsername && password === fixedPassword) {
    alert("Đăng nhập thành công");
  } else {
    alert("Đăng nhập thất bại");
  }
}