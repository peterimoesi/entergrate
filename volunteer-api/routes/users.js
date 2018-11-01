const express = require('express');
const bcrypt = require('bcryptjs');

const router = express.Router();
const User = require('../models/user.js');

const checkAuth = require('./utils');

/* GET users listing. */
// router.get('/', checkAuth, async (req, res, next) => {
//     const user = await User.findOne({ username : req.session.username });
//     res.send(200, { message: 'this is a protected api, you are logged in'});
// });

router.patch('/:id', checkAuth, async (req, res, next) => {
    try {
        await User.findByIdAndUpdate(req.params.id, {
            ...req.body
        });
        res.send(200);
    } catch (e) {
        res.send(400, e);
    }
});

router.get('/is-authenticated', checkAuth, async (req, res, next) => {
    try {
        res.send(200);
    } catch (e) {
        res.send(400, e);
    }
});

router.post('/logout', checkAuth, (req, res) => {
    try {
        req.session.auth = false;
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
            // .populate("interest", "-volunteers -createdAt -updatedAt")
            .populate({
                path: 'interest',
                select: '-volunteers -createdAt -updatedAt',
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
                        res.send(user);
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
        bcrypt
            .hash(password, 12)
            .then(hashedPassword =>
                User.create({ ...req.body, password: hashedPassword })
            )
            .then(user => {
                req.session.auth = true;
                req.session._id = user._id;
                res.send(user);
            })
            .catch(error => {
                res.status(400).send(error);
            });
    } catch (e) {
        res.status(401).send(e);
    }
});

// export const profileImageUpdate = async (req, res) => {
//     const { imageString } = req.body;
//     const { userId } = req.params;
//     try {
//         await User.findById(userId, async(err, user) => {
//             user.image = imageString;
//             user.save((err, updatedUser) => {
//                 if (err) {
//                     console.log(err);
//                     return res.status(401).json({ error: true, errorMessage: 'Error saving img' });
//                 }
//                 return res.status(200).json({
//                     success : true,
//                     user : {
//                         image : updatedUser.image,
//                     },
//                 });
//             });
//         });
//     }
//     catch (e) {
//         console.log(e);
//         return res.status(401).json({ error: true, errorMessage: 'Unauthorised' });
//     }
// };

module.exports = router;
