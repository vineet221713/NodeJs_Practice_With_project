const fs  = require('fs');
fs.readFile('./abc.txt', function(err, data){

if(err){
    console.log("error reading file")
}
else{
    console.log(data.toString());
}    
})