const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({

    questionid: {
        type: String,
    },
    syllabus: {
        type: String,
    },
    explanation: {
        type: String,
    },
})

module.exports = mongoose.model('Report', ReportSchema)

