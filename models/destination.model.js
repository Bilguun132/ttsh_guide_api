const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let destinationSchema = new Schema({
    destination: String,
    nearestLobby: String
})

module.exports = mongoose.model('Destination', destinationSchema);