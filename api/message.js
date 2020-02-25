const router = require('express').Router();

const Message = require('../model/Message');


router.get('/', async (req, res) => {
    try {
        const messages = await Message.getMessage();
        res.json(messages);
    } catch (err) {
        res.json({
            err: err.message || err.toString()
        });

    }
});

router.post('/add', async (req, res) => {
    try {
        const messages = await Message.setMessage(req.body);
        res.json(messages);
    } catch (err) {
        res.json({ err: err.message || err.toString })
    }
});



router.post('/edit', async (req, res) => {
    try {
        const messages = await Message.editMessage(req.body);
        res.json(messages);
    }
    catch (err) {
        res.json({ err: err.message || err.toString })
    }
});
module.exports = router;