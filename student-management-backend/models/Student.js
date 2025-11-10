import mongoose from "mongoose";

const studnentSchema = new mongoose.Schema({
    name:{type: String, requred:true},
    email:{type: String, required: true},
    course:{ type: String, required: true},
    year:{type: Number, required: true},
    createdAt:{type: Date, default: Date.now}

});

export default mongoose.model("Student",studnentSchema)