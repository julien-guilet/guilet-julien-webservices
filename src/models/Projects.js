import mongoose, { now } from 'mongoose';
const { Schema } = mongoose;


const creationProject = new Schema({
    name: String,
    description: String,
    team : [{ type: Schema.Types.ObjectId, ref: 'users' }],
},
{ timestamps: true }
);


const creationModel = mongoose.model('projects',creationProject)

export default creationModel