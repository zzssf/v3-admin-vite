// server.js
const express = require("express")
const { login, userInfo, tableInfo } = require("./index")
const app = express()

// 解析 JSON 格式的请求体
app.use(express.json())

app.get("/users/info", (_, res) => {
  res.json(userInfo)
})

app.get("/table", (_, res) => {
  res.json(tableInfo)
})

app.post("/users/login", (_, res) => {
  res.json(login)
})

// 启动服务
const PORT = 3099
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
