const fs = require('fs');

fs.writeFile("newfile.txt", "content are done ", function (err){
if (err){
    console.log("Error writing")
}
else{

    console.log("save");
}
})