const http = require('http');
const url = require('url');

http.createServer(function (req, res){

    console.log(req.url);
    const ob = url.parse(req.url,true);

    console.log(ob);
})
.listen(8085);