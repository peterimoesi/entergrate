const mongoose = require('mongoose');

const { Schema } = mongoose;

const eventSchema = new Schema(
    {
        owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        name: String,
        location: String,
        description: String,
        date: String,
        time: String,
        presonalUrl: String,
        image: {
            data: Buffer,
            type: String
        },
        requirements: {
            type: Array,
            default: []
        },
        active: {
            type: Boolean,
            default: true
        },
        volunteers: [
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
