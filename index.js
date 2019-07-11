// Import a module
const http = require('http')
const handles = require('./handles')
// Declare an http server
http.createServer(handles.callBackFun).listen(8000)
