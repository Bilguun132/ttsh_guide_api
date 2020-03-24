const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let carparkSchema = new Schema({
    lotNumber: String,
    level: String,
    latitude: String,
    longitude: String,
    distanceToLobbyC: String,
    distanceToLobbyD: String,
    distanceToLobbyE: String,
    distanceToLobbyF: String,
    distanceToLobbyP: String,
    isHandicapped: String,
    isReserved: String,
    isOccupied: String
})

module.exports = mongoose.model('Carpark', carparkSchema);