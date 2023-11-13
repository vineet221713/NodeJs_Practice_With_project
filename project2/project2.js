const nodemailer = require('nodemailer');
let tranportr = nodemailer.createTransport({

    service : 'gmail',
    auth : {
        user : "vineetsingh1122@gmail.com",
        password : ""
    }
})

let message = {

    from : "vineetsingh1122@gmail.com",
     to : "vineetprivate111222@gmail.com",
     subject : "Email using Node js ",
     Text : "Email using Node"
}
tranportr.sendMail(message, function(err,infor){

    if (err){
        console.log("Error sending")
    }
    else{

        console.log("Email Done");
    }
})