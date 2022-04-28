let $form = $("#register-form");
$form.on("submit", function (e) {
  e.preventDefault(); // 阻止默认事件，因为form的submit事件默认会刷新页面
  let hash = {};
  let need = ["email", "password", "repassword"];
  need.forEach((name) => {
    // 通过遍历获取表单数据并存到hash里
    let value = $form.find(`[name=${name}]`).val();
    hash[name] = value;
  });
});

$.post("/register", hash) // 第一个参数与是路径，第二个参数要传给服务端的数据
  .then(
    () => {
      console.log("success");
    },
    () => {
      console.log("error");
    }
  );
function readBody(request) {
  return new Promise((resolve, reject) => {
    let body = []; // 请求体
    // 监听request的data事件，每接收到一段data，就放到请求体这个哈希表里面
    request
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        // 当数据全部接收完时，会触发end事件，然后就可以把所有的数据都得到啦
        body = Buffer.concat(body).toString();
        resolve(body);
      });
  });
}
// 调用上面的函数，得到的请求体类似于这种形式：
// email=1&password=2&repassword=3
body = "email=1&password=2&repassword=3";
let strings = body.split("&");
// 结果为 ['email=1', 'password=2', 'password_confirmation=3']
// 默认 @ 符号会转义成 %40 ，所以需要decodeURIComponent解码URI
hash[key] = decodeURIComponent(value);
// 然后才可以检测email 中是否存在 @ 符号
if (email.indexOf("@") === -1) {
  // 邮箱中没有@说明邮箱格式错误
  response.statusCode = 400;
  response.setHeader("Content-Type", "application/json;charset=utf-8");
  // 如果出错响应体返回JSON对象，前端就可以直接解析
  response.write(`{
    "errors": {
      "email": "invalid"
    }
  }`);
} else if (password !== repassword) {
  // 两次输入的密码不一致
  response.statusCode = 400;
  response.write("password not match");
}
$.post("/register", hash).then(
  (response) => {
    console.log(response);
  },
  (response) => {
    // 获得后端传过来的响应体内容
    // 因为响应体一定是字符串，故需要使用JSON.parse将其转换成对象
    let { errors } = JSON.parse(response.responseText);
    if (errors.email && errors.email === "invalid") {
      $form.find('[name="email"]').siblings(".error").text("邮箱格式错误");
    }
  }
);
