const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    mark: {type: String, required: true},
    caseType: {type: String, required: true},
    number: {type: String, required: true},
    date: {type: Date, default: Date.now}
})

module.exports = model('Link', schema)