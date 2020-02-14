const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
    body: {
        type: String,
        require: true,

    }
});
const Message = mongoose.model('Message', MessageSchema);
module.exports = {
    Message
}