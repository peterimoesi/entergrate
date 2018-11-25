const express = require('express');
const bcrypt = require('bcryptjs');

const router = express.Router();
const User = require('../models/user.js');
const Event = require('../models/event.js');

const Auth = require('./utils');
const transporter = require('./mailer');

/* GET users listing. */
// router.get('/', checkAuth, async (req, res, next) => {
//     const user = await User.findOne({ username : req.session.username });
//     res.send(200, { message: 'this is a protected api, you are logged in'});
// });

router.patch('/:id', Auth.checkAuth, async (req, res, next) => {
    try {
        await User.findByIdAndUpdate(req.params.id, {
            ...req.body
        });
        res.send(200);
    } catch (e) {
        res.send(400, e);
    }
});

router.get('/is-authenticated', Auth.checkAuth, async (req, res, next) => {
    try {
        res.send(200);
    } catch (e) {
        res.send(400, e);
    }
});

router.post('/logout', (req, res) => {
    try {
        req.session.auth = false;
        req.session._id = null;
        return res.sendStatus(200);
    } catch (e) {
        console.log(e);
        return res.sendStatus(400);
    }
});

router.post('/login', async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    try {
        User.findOne({ email })
            // .populate("interest", "-entergrates -createdAt -updatedAt")
            .populate({
                path: 'interest',
                select: '-entergrates -createdAt -updatedAt',
                populate: { path: 'owner', select: 'fullName' }
            })
            .exec((err, user) => {
                if (!user) {
                    return res
                        .status(401)
                        .json({ error: true, errorMessage: 'No user found' });
                }
                bcrypt.compare(password, user.password, (err, result) => {
                    if (result) {
                        req.session.auth = true;
                        req.session._id = user._id;
                        if (user.userGroup === 2) {
                            req.session.admin = true;
                        }
                        res.status(200).send({
                            ...user._doc,
                            password: ''
                        });
                    } else {
                        return res.status(401).send({
                            error: true,
                            errorMessage: 'Unauthorised'
                        });
                    }
                });
            });
    } catch (e) {
        console.log('Error authenticating user: ');
        console.log(e);
        next();
    }
});

router.post('/', async (req, res, next) => {
    const { email, password } = req.body;

    if (password.length < 6) {
        return res.status(400).json({
            error: true,
            errorMessage: 'Password should be more than 6'
        });
    }
    try {
        User.create({ ...req.body })
            .then(user => {
                req.session.auth = true;
                req.session._id = user._id;
                transporter.sendMail(
                    {
                        from: 'info@entergrate.org',
                        to: email,
                        subject: 'Welcome to Entergrate',
                        text: 'Welcome to Entergrate',
                        html: `<div>
                            <h3>Welcome</h3>
                            <div>
                                <p>Congratulations on been an entergrate</p>
                                <p>Click <a href="disis.me/open-events">here</a> to view open positions</p>
                            </div>
                        </div>`
                    },
                    (err, info) => {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log('Message sent: %s', info.response);
                        }
                    }
                );
                res.status(200).send({
                    ...user._doc,
                    password: ''
                });
            })
            .catch(error => {
                console.log(error);
                res.status(400).send(error);
            });
    } catch (e) {
        res.status(401).send(e);
    }
});

router.patch('/', Auth.checkAuth, async (req, res, next) => {
    try {
        await User.findById(req.session._id, async (err, user) => {
            if (err) {
                console.log(err);
                return res.status(400).send(err);
            }
            const keys = Object.keys(req.body);
            for (let key of keys) {
                user[key] = req.body[key];
            }
            await user.save();
            res.send(200);
        });
    } catch (e) {
        console.log(e);
        return res.status(400).send(e);
    }
});

router.delete('/', Auth.checkAuth, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.session._id, async (err, result) => {
            if (err) {
                console.log(err);
                return res.status(400).send(err);
            }
            await Event.find({}, (error, events) => {
                if (error) {
                    console.log(error);
                    return res.status(400).send(err);
                }
                events.forEach(currEvent => {
                    currEvent.entergrates = currEvent.entergrates.filter(
                        ent => ent != req.session._id
                    );
                    currEvent.save();
                });
            });
            req.session.auth = false;
            req.session._id = null;
            res.status(401).send('User deleted');
        });
    } catch (e) {
        console.log(e);
        return res.status(400).send(e);
    }
});

module.exports = router;
