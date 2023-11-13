const fs = require('fs');
const http = require('http');
const url = require('url');

http.createServer(function(req, res){

const path = req.url ;
if(path=="/about")
{
    // console.log("this is about page")// this for send in console of browser 
    const fc = fs.readFileSync("about.html");
    res.write(fc);
    res.end();


}
else if(path=="/home")
{
    //console.log("this is home page");

    const fc  = fs.readFileSync("home.html");
    res.write(fc);
    res.end();
}

})
.listen(8085);
