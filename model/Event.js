const mongoose = require('mongoose');
const { Schema } = mongoose;

const EventSchema = new Schema({
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
        const events = await this.find({})
            .sort({ createdAt: -1 })
            .skip(0)
            .limit(10);
        return events;
    }

    static async setEvent({ title, body, image }) {
        return this.create({
            title,
            body,
            image,
        });
    }
    static async editEvent({ id, title, body, image }) {
        const editedEvent = this.findOneAndUpdate(id, { title: title, body: body, image: image }, { new: true });
        return editedEvent;

    }
}
EventSchema.loadClass(EventClass)
const Event = mongoose.model("Event", EventSchema);
module.exports = Event;