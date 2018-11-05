const express = require('express');
const router = express.Router();

const checkAdminAuth = require('./utils');
const transporter = require('./mailer');

router.post('/', checkAdminAuth, async (req, res) => {
    const { to, subject, message } = req.body;
    try {
        await transporter.sendMail(
            {
                from: req.session.email,
                to,
                subject,
                html: `<div>${message}
                </div>`
            },
            (err, info) => {
                if (err) {
                    console.log(err);
                    res.status(400).send({ err });
                } else {
                    res.status(200).send({
                        success: `Message sent: ${info.response}`
                    });
                }
            }
        );
    } catch (e) {
        console.log(e);
        res.sendStatus(400);
    }
});

module.exports = router;
