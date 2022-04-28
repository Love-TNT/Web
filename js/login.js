function myFunction() {
  var user = document.getElementById("username").value;
  var pwd = document.getElementById("password").value;

  if (user == "TNT" && pwd == "233") {
    window.location.href = "./about.html";
  } else {
    window.alert("账号或密码错误");
  }
}
