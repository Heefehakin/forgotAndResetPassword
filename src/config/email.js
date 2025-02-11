const nodemailer = require('nodemailer');


exports.sendEmail = async ( msg, subject, reciever ) => {
    try {
        const transporter = nodemailer.createTransport({
            host: 'pop.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'wunmi.inc@gmail.com',
                pass: "ufkhbladdsqucprn"
            },
            tls: {
                rejectUnauthorized: false
            }
        })
        const info = await transporter.sendMail({
            from: "Heefehakin <wunmi.inc@gmail.com>",
            subject: subject,
            html: msg,
            to: reciever,
        })
        return `Message sent', ${nodemailer.getTestMessageUrl(info)}`
    } catch (error) {
        console.error(err);
        throw new Error("Error sending email");
    }
}