import { Schema, model } from "mongoose";

const colorSchema = new Schema({
    color: {
        type: String,
        minLength: 2,
        maxLength: 150,
        required: true
    }
});
const Color = model("color", colorSchema)

export default Color