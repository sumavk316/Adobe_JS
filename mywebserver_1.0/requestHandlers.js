//http:localhost:8000/
function handleRoot_get(req,res){
    res.send("Welcome to node program");
}

module.exports={root_get:handleRoot_get};
