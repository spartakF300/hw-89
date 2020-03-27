const express = require('express');
const bcrypt = require("bcrypt");
const router = express.Router();
const User = require('../model/User');

router.post('/', async (req, res) => {
    const userData = new User({
        username: req.body.username,
        password: req.body.password
    });

    const user = new User(userData);
    try {
        user.generateToken();
        await user.save();
        return res.send(user)
    } catch (error) {
        return res.status(400).send(error)
    }
});
router.post('/sessions', async (req, res) => {
    const user = await User.findOne({username: req.body.username});
    if (!user) {
        return res.status(400).send({error: 'username or password not correct!!!'})
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
        return res.status(400).send({error: 'username or password not correct!!!'})
    }
    user.generateToken();
    await user.save();
    return res.send(user)
});
router.delete('/sessions', async (req, res) => {
    const success = {message: 'Success'};
    try {
        const token = req.get('Authorization').split(' ')[1];
        if (!token) return res.send(success);
        const user = await User.findOne({token});
        if(!user) return res.send(success);
        user.generateToken();
        await user.save();
        return res.send(success);
    } catch (e) {
        return res.send(e)
    }
});
module.exports = router;