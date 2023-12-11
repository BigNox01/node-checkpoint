var nodemailer=require('nodemailer')
// sending the email
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mygmail",
    pass: "password",
  },
});
var mailoptions = {
  from: "mygmail",
  to:'othergmail',
  subject:"first automated mail",
  text:"that was easy"
};
transporter.sendMail(mailoptions,function(error,info){
    if(error){
        console.log(error)
    } else{
        console.log('email sent'+info.response)
    }
})