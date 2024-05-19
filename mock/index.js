const { login, editTable, deleteTable, addTable } = require("./login")
const { userInfo } = require("./userInfo")
const { tableInfo } = require("./tableInfo")
const { code } = require("./code")

module.exports = { code, login, editTable, deleteTable, userInfo, tableInfo, addTable }
