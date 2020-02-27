const router = require('express').Router();
const multer = require('multer');
// const upload = multer({ dest: 'uploads' })
const Event = require('../model/Event');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname);
    }
});
// const fileFilter = (req, file, cb) => {
//     //reject a file
//     if (file.mintype === 'image/jpeg' || file.mimetype === 'image/png') {
//         cb(null, true);
//     } else {
//         cb(null, false);
//     }

// }
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 30
    },
    // fileFilter: fileFilter
});
router.get('/', async (req, res) => {
    try {

        const events = await Event.getEvent();
        res.json(events);
    }
    catch (err) {
        res.json({ error: err.message || err.toString() });
    }
});

router.post('/add', upload.single('image'), async (req, res) => {
    console.error("Here I am");
    try {
        console.log(req.file);
        const event = new Event({
            title: req.body.title,
            body: req.body.body,
            image: req.file.path

        });
        event.save()
        // const event = await Event.setEvent(req.body);
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