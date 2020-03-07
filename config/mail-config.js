exports = module.exports = () => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'xavierbignell@gmail.com',
            pass: ''
        }
    });

    var mailOptions = {
        from: 'xavierbignell@gmail.com',
        to: 'xavierbignell@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
};
