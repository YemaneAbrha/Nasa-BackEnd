const router = require('express').Router();


const Event = require('../model/Event');

router.get('/', async (req, res) => {
    try {
        const events = await Event.getEvent();
        res.json(events);
    }
    catch (err) {
        res.json({ error: err.message || err.toString() });
    }
});

router.post('/add', async (req, res) => {
    try {
        const event = await Event.setEvent(req.body);
        res.json(event);
    }
    catch (err) {
        res.json({ error: err.message || err.toString() });
    }
});

router.post('/edit', async (req, res) => {
    try {
        const event = await Event.editEvent(req.body);

        res.json(event);
    }
    catch (err) {
        res.json({ err: err.message || err.toString })
    }
});
module.exports = router;