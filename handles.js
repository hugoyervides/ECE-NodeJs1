const url = require('url')
const qs = require('querystring')
//Generate random name
function generateRandomName(){
    //Declaracion de variables
    var names=['Juan','Arturo','Jose','Antonio','Carlos']
    return names[Math.floor(Math.random() * names.length)];
}
module.exports = {
    callBackFun: function(req,res){
        //Declaracion de variables
        const route = url.parse(req.url)
        const path = url.parse(req.url).pathname;
        const params = qs.parse(route.query)      
        res.writeHead(200, {'Content-Type': 'text/plain'});
        //Get the value Name
        if (path == '/hello' && 'name' in params) {
            var returnString = 'Hello '
            returnString += generateRandomName()+'\n'
            returnString += params.name + " Is Awsome!"
            res.write(returnString)
        } else { 
            res.write('404 not found')
        }
        res.end();
    }
}