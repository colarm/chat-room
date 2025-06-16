const https = require("https");
const http = require("http");
const fs = require("fs");
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 443;

app.use(express.static(path.join(__dirname, "build")));

// 读取 Let’s Encrypt 证书
const options = {
  key: fs.readFileSync("/etc/letsencrypt/live/nanochat.cc/privkey.pem"),
  cert: fs.readFileSync("/etc/letsencrypt/live/nanochat.cc/fullchain.pem"),
};

// 静态文件服务
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// 通配符路由
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// 创建 HTTP 服务器并重定向到 HTTPS
http
  .createServer((req, res) => {
    res.writeHead(301, { Location: "https://" + req.headers.host + req.url });
    res.end();
  })
  .listen(80, () => {
    console.log("Redirecting HTTP to HTTPS...");
  });

https.createServer(options, app).listen(port, () => {
  console.log("HTTPS Server running on port " + port);
});
