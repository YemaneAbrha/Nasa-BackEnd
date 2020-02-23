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
    createdAt: {
        type: Date,
        default: Date.now

    }
});

class EventClass {
    static async getEvent() {
        const event = await this.find({})
            .sort({ createdAt: -1 })
            .skip(0)
            .limit(10);
        return event;
    }
    static async setEvent({ title, body, image }) {
        return this.create({
            title,
            body,
            image,
        })
    }
    static async editEvent({ id, title, body, image }) {
        const filter = { _id: id };
        const update = { title: title, body: body, image: image };
        const editedEvent = this.findOneAndUpdate(filter, update, {
            new: true
        });
        return editedEvent;

    }
}
EventSchema.loadClass(EventClass)
const Event = mongoose.model("Event", EventSchema);
module.exports = {
    Event
};