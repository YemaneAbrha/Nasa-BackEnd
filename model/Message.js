const mongoose = require('mongoose');
const { Schema } = mongoose;

const MessageSchema = new Schema({
    body: {
        type: String,
        require: true,

    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
class MessageClass {

    static async getMessage() {
        const message = await this.find()
            .sort({ createdAt: -1 })
            .skip(0)
            .limit(10);
        return message;
    }

    static async setMessage({ body }) {
        return this.create({
            body
        });
    }

    static async editMessage({ id, body }) {
        const filter = { _id: id };
        const update = { body: body }
        const editedMessage = this.findOneAndUpdate(filter, update, {
            new: true
        });
        return editedMessage;
    }
}
MessageSchema.loadClass(MessageClass)
const Message = mongoose.model("Message", MessageSchema);
module.exports = Message;
