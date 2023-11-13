const fs = require('fs');
fs.appendFile("abc.txt","this is a test file",function(err){

    if (err){
        console.log("Error");
    }
    else{
        console.log("Success");
    }
})