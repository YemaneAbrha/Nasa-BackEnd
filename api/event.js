const express = require('express');
const router = express.Router();

const Event = require('../model/Event');

router.get('/events', async (req, res) => {
    try {
        const events = await Event.event
        res.json(events);
    }
    catch (err) {
        res.json({ error: err.message || err.toString() });
    }
});

router.post('/events/add', async (req, res) => {
    try {
        const event = await Event.setEvent(req.body);
        res.json(event);
    }
    catch (err) {
        res.json({ error: err.message || err.toString() });
    }
});

router.post('/events/edit', async (req, res) => {
    try {
        const event = await Event.editEvent(req.body);
        res.json(event);
    }
    catch (err) {
        res.json({ error: err.message || err.toString })
    }
});