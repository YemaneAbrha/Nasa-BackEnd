const router = require('express').Router();

const Message = require('../model/Message');


router.get('/', async (req, res) => {
    try {
        const message = Message.getMessage()
        res.json(message);
    } catch (err) {
        res.json({
            error: error.message || error.toString()
        });

    }
});

router.post('/add', async (req, res) => {
    try {
        const message = await Message.setMessage(req.body);
        res.json(message);
    } catch (err) {
        res.json({ err: err.message || err.toString })
    }
});



router.post('/edit', async (res, res) => {
    try {
        const message = await Message.editMessage(req.body);
        res.json(message);
    }
    catch (err) {
        res.json({ err: err.message || err.toString })
    }
});
module.exports = router;