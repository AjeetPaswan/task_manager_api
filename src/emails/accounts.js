const sgMail= require('@sendgrid/mail')

sgMail.setApiKey(process.env.SG_API_KEY)

const sendWelcomeEmail=(email,name)=>{
sgMail.send({
    to:email,
    from:'abhyuday@kgpian.iitkgp.ac.in',
    subject:'thanks for joining in',
    text:`Welcome ${name} to the app`
})
}
const sendCancelEmail=(email,name)=>{
sgMail.send({
    to:email,
    from:'abhyuday@kgpian.iitkgp.ac.in',
    subject:'goodbye',
    text:`hope to see you soon ${name} `
})
}


module.exports={
    sendWelcomeEmail,
    sendCancelEmail
}