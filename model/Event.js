const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    body: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },


});

const Event = mongoose.model("Event", EventSchema);
model.exports = {
    Event,

};