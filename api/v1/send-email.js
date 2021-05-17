const express = require("express");
const bodyParser = require('body-parser')
const sgMail = require('@sendgrid/mail');

const app = express();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(bodyParser.json())
app.post("/", (req, res) => {


    let msg = {
        to: 'info@voetdeluxe.nl', //req.body.email, // Change to your recipient
        from: 'info@voetdeluxe.nl', // Change to your verified sender
        subject: 'Website contactformulier van ' + req.body.name,
        text: 'Telefoonnummer: ' + req.body.phone + ', ' + 'bericht: ' + req.body.message,
    }

    sgMail
        .send(msg)
        .then(() => {
            return res.status(200).json({ 'message': 'Email verzonden!' })
        })
        .catch((error) => {
            return res.status(400).json({ 'error': 'Oepsss... Something went wrong ' + error })
        })

});

module.exports = {
    // path: "@/api/v1/send-email",
    handler: app
};
