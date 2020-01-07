let appModule=require("./app");       //relative path - file module
//appModule.appInit();
let handlers=require("./requestHandlers"); 
const express = require('express')  //built in module
const app = express();
app.use(express.static(__dirname)); //__dirname = current directory
/* app.use("/", function(req, res, next){
    console.log("Middleware3");
    next();
});
app.use("/", function(req, res, next){
    console.log("Middleware1");
    next();
});
app.use("/", function(req, res, next){
    console.log("Middleware2");
    res.send("send response from middleware2");
}); */
/*app.get("/", handlers.root_get);
app.get("/userAdminDashboard.html", function(req, res){

});*/
app.listen(8000, appModule.appInit);