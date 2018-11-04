// grab the things we need
const mongoose = require('mongoose');

const { Schema } = mongoose;

// create a schema
const userSchema = new Schema(
    {
        userGroup: { type: Number, required: true },
        fullName: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        address: { type: String, required: true },
        phoneNumber: { type: String, required: true },
        password: { type: String, required: true },
        bio: { type: String, required: true },
        url: String,
        interest: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Event'
            }
        ]
        // ,
        // events: [
        //     {
        //         type: Schema.Types.ObjectId,
        //         ref: 'Event'
        //     }
        // ]
        // image : {
        //     data : Buffer,
        //     type : String
        // }
    },
    { timestamps: true, usePushEach: true }
);

// the schema is useless so far
// we need to create a model using it
const User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;
