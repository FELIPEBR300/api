const mongoose = require("mongoose");

async function main() {
    try {
        mongoose.set("strictQuery", true);

        await mongoose.connect("mongodb+srv://felipecamargobr10:cxY3Rqg7QqNctuwy@api12.q5djduc.mongodb.net/?retryWrites=true&w=majority&appName=api12");

        console.log("Conectado ao banco!");
    } catch (error) {
        console.log(`Erro: ${error}`);
    }
}

module.exports = main;