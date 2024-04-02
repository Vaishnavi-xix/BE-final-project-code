// import {model,Schema} from 'mongoose'

// const UserSchema = new Schema({
//     name:{
//         type:String,
//         required:true
//     },
//     email:{
//         type:String,
//         required:true,

//     },
//     password:{
//         type:String,
//         required:true
//     },
//     mobile:{
//         type:String,
//         default:0,
//         required:true
//     },
//     address:{
//         type:String,

//     },
//     roll:{
//         type:String,
//         required:true

//     }
// },{
//     timestamps:true,
// });

// const User = model('User',UserSchema)

// export default User

import { model, Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    default: "user",
  },

  mobile: {
    type: String,
    
  },

  email: {
    type: String,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  gender: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  roll: {
    type: String,
   
  },
});

const User = model("User", userSchema);
export default User;
