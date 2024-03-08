import mongoose, { now } from 'mongoose';
const { Schema } = mongoose;


const creationCapacibilities = new Schema({
    name:  {type:String,  required:'un nom est obligatoire:'},
},
{ timestamps: true }
);


const creationModel = mongoose.model('capacibilities',creationCapacibilities)

export default creationModel