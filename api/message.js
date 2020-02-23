const router = require('express').Router();

const Message = require('../model/Message');


router.get('/', async (req, res) => {
    try {
        const message = Message.getMessage()
        res.json(message);
    } catch (error) {
        res.json({
            error: error.message || error.toString()
        });

    }
});
//add message to the list
router.post('/add', async (req, res) => {

});

// edit message from the list

router.post('/edit', async (res, res) => {

});