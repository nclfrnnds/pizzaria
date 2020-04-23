const nodemailer = require('nodemailer');

const email = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    service: 'smtp.mailtrap.io',
    port: 2525,
    secure: false,
    auth: {
        user: 'e73cfaaecdbaa1',
        pass: '8db1a68a3950c6'
    }
})

/*
const email = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'nicoli1992@gmail.com',
        pass: ''
    }
});
*/

module.exports = email;