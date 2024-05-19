// server.js
const express = require("express")
const { code, login, userInfo, editTable, tableInfo, deleteTable, addTable } = require("./index")
const app = express()

// 解析 JSON 格式的请求体
app.use("/api/v1", express.json(), express.urlencoded({ extended: true }))

app.get("/api/v1/login/code", (_, res) => {
  res.json(code)
})

app.get("/api/v1/users/info", (_, res) => {
  res.json(userInfo)
})

app.post("/api/v1/users/login", (_, res) => {
  res.json(login)
})

app.get("/api/v1/table", (_, res) => {
  res.json(tableInfo)
})

app.put("/api/v1/table", (_, res) => {
  res.json(editTable)
})

app.delete("/api/v1/table", (_, res) => {
  res.json(deleteTable)
})

app.post("/api/v1/table", (_, res) => {
  res.json(addTable)
})

// 启动服务
const PORT = 3099
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
