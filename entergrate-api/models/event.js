const mongoose = require('mongoose');

const { Schema } = mongoose;

const eventSchema = new Schema(
    {
        // owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        businessName: String,
        businessBio: String,
        url: String,
        name: String,
        location: String,
        description: String,
        dateTime: String,
        image: {
            data: Buffer,
            type: String
        },
        active: {
            type: Boolean,
            default: true
        },
        entergrates: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    { timestamps: true, usePushEach: true }
);

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
