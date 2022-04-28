function login() {
  var user = document.getElementById("login_name").value;
  var pwd = document.getElementById("login_pwd").value;

  if (user == "TNT" && pwd == "233") {
    window.location.href = "./server.html";
  } else {
    window.alert("账号或密码错误");
  }
}

function register(){
  window.alert("注册登录功能还未完成;登录功能仅供测试:账号TNT,密码233.");
}
