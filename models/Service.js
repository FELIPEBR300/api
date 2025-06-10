const mongoose = require("mongoose");

const { Schema } = mongoose;

const serviceSchema = new Schema({
    name: {
        type: String,
        required: true // Correção aqui
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: { // Correção na capitalização
        type: String,
        required: true
    },
}, { timestamps: true });

const Service = mongoose.model("Service", serviceSchema);

module.exports = {
    Service,
    serviceSchema,
};