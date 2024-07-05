const prisma = require("../src/connection");
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  });

module.exports.Refer = async function (req, res) {
  const {  email, name } = req.body;
   try {
    const SendRes= await prisma.refer
    .create({
      data: {
       email,
        name
      },
    })
    
    
            
    const to=SendRes.email    
    const subject="Regarding To Referral"    
    const html=`<h1>Hello ${SendRes.name} You have been Referred.</h1>`
    const text=""
    let info = await transporter.sendMail({
        from: 'riyajain2950@gmail.com',
        to,
        subject,
        text,
        html
        });
      
        console.log('Message sent: %s', info.messageId);
        return res.status(200).json({ SendRes,message: 'Email sent successfully', messageId: info.messageId });
          
            
    
   } catch (error) {
    console.log(error)
    return res.status(400).json({error})
   }
    
};



