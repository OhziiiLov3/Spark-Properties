import {Schema, model, models} from 'mongoose';


const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exisit'],
        require: [true, 'Email is required']
    },
    username: {
        type: String,
        required: [true, 'Useranme os required']
    },
    image:{
        type: String,    
    },
    bookmarks: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Property'
        }
    ]

},{
    timestamps: true
});

const User = models.User || model('User', UserSchema)

export default User;