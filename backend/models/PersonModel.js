const mongoose = require("mongoose")                            // Import mongoose

const PersonSchema = mongoose.Schema({                          // Create schema with two strings
    firstName: String,
    lastName: String
})

module.exports = mongoose.model('Person', PersonSchema)         // Export schema as 'Person'