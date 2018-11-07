const express = require('express');
var ObjectId = require('mongoose').Types.ObjectId;

const router = express.Router();
const Event = require('../models/event.js');
const User = require('../models/user.js');

const Auth = require('./utils');

/* GET Event listing. */
router.get('/', async (req, res, next) => {
    try {
        await Event.find({})
            .select(!req.session.admin ? '-entergrates' : null)
            .sort('-dateTime')
            .exec((err, event) => {
                if (err) {
                    console.log(err);
                    return res.status(400).send(err);
                }
                return res.status(200).send(event || []);
            });
    } catch (e) {
        console.log(e);
        return res.status(400).send(e);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        await Event.findById(req.params.id).exec((err, event) => {
            if (err) {
                console.log(err);
                return res.status(400).send(err);
            }
            return res.status(200).send(event);
        });
    } catch (e) {
        console.log(e);
        return res.status(400).send(e);
    }
});
console.log(Auth);

router.get('/admin/:id', Auth.checkAdminAuth, async (req, res, next) => {
    try {
        await Event.find({})
            .populate({
                path: 'entergrates',
                select: '-password -events -updatedAt -interest'
            })
            .sort('-dateTime')
            .exec((err, event) => {
                if (err) {
                    console.log(err);
                    return res.status(400).send(err);
                }
                return res.status(200).send(event || []);
            });
    } catch (e) {
        console.log(e);
        return res.status(400).send(e);
    }
});

router.patch('/:id/add-entergrate', Auth.checkAuth, async (req, res, next) => {
    try {
        await Event.findById(req.params.id, async (err, event) => {
            if (err) {
                console.log(err);
                return res.status(400).send(err);
            }
            const { entergrateId } = req.body;
            const { entergrates } = event,
                entergrateIndex = entergrates.indexOf(entergrateId);
            if (entergrateIndex === -1) {
                entergrates.push(entergrateId);
            }
            // update user event objects
            User.findById(entergrateId, async (error, user) => {
                if (error) {
                    console.log(error);
                    return res.status(400).send(error);
                }
                const { interest } = user,
                    interestIndex = interest.indexOf(req.params.id);
                if (interestIndex === -1) {
                    interest.push(req.params.id);
                }
                await user.save();
            });
            await event.save();
            return res.status(200).send(event);
        });
    } catch (e) {
        console.log(e);
        return res.status(400).send(e);
    }
});

router.patch(
    '/:id/remove-entergrate',
    Auth.checkAuth,
    async (req, res, next) => {
        try {
            await Event.findById(req.params.id, async (err, event) => {
                if (err) {
                    console.log(err);
                    return res.status(400).send(err);
                }

                const { entergrateId } = req.body;
                const { entergrates } = event,
                    index = entergrates.indexOf(entergrateId);
                if (index > -1) {
                    entergrates.splice(index, 1);
                }
                // update user event objects
                User.findById(entergrateId, async (error, user) => {
                    if (error) {
                        console.log(error);
                        return res.status(400).send(error);
                    }
                    const { interest } = user,
                        interestIndex = interest.indexOf(req.params.id);
                    if (interestIndex > -1) {
                        interest.splice(interestIndex, 1);
                    }
                    await user.save();
                });
                await event.save();
                return res.sendStatus(200);
            });
        } catch (e) {
            console.log(e);
            return res.status(400).send(e);
        }
    }
);

router.patch('/:id', Auth.checkAdminAuth, async (req, res, next) => {
    try {
        await Event.findById(req.params.id, (err, event) => {
            if (err) {
                console.log(err);
                return res.status(400).send(err);
            }
            const keys = Object.keys(req.body);
            for (let key of keys) {
                event[key] = req.body[key];
            }
            event.save(err => {
                if (err) {
                    console.log(err);
                }
                return res.sendStatus(200);
            });
        });
    } catch (e) {
        console.log(e);
        return res.status(400).send(e);
    }
});

// router.get('/user/:id', checkAuth, async (req, res, next) => {
//     const id = req.params.id;
//     try {
//         await Event.find({ owner: new ObjectId(id) })
//             .populate({
//                 path: 'entergrates',
//                 select: '-password -events -updatedAt -interest'
//             })
//             .exec((err, result) => {
//                 console.log(err);
//                 res.send(result);
//             });
//     } catch (error) {
//         console.log(error);
//         return res.send(error);
//     }
// });

router.post('/', Auth.checkAdminAuth, async (req, res, next) => {
    try {
        const event = await Event.create({
            ...req.body
        });

        // User.findById(owner).exec((err, user) => {
        //     if (err) {
        //         return res.send(err);
        //     }
        //     user.events.push(event._id);
        //     user.save((err, newUser) => console.log(err, newUser));
        // });
        return res.status(200).send(event);
    } catch (e) {
        console.error(e);
        return res.status(404).send(e);
    }
});

module.exports = router;
