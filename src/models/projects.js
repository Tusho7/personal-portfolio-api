import mongoose from "mongoose";

const { Schema } = mongoose

const projectSchema = new Schema({
    id:{
        type: Schema.Types.Number,
        required: true
    },
    title: {
        type: Schema.Types.String,
        required: true
    },
    description: {
        type: Schema.Types.String,
        required: true
    },
    category: {
        type: Schema.Types.String,
        required: true
    },
    status: {
        type: Schema.Types.String,
        required: true
    },
    statusImg: {
        type: Schema.Types.String,
        required: true
    },
    built: {
        type: Schema.Types.String,
        required: true
    },
    picture: {
        type: Schema.Types.String,
        required: true
    }
});

const project = mongoose.model('project', projectSchema);

export default project;