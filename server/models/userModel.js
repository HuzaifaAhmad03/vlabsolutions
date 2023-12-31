import mongoose from 'mongoose';

const userSchema= new mongoose.Schema({
    id:{
        type:String,
        required:true,
        trim:false,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    }

},{
    timestamps:true
});

export default mongoose.model('Users',userSchema);