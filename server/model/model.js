const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    bps : {
        type : String,
        required: true,
        unique: true
    },
    resi : {
        type : String,
        unique: true
    },
    permohonan : {
        type: String,
    },
    
    npwp : {
        type: String,
    },
    nama : {
        type: String,
    },
    status : {
        type: String,
    }
})

const Bpsdb = mongoose.model('bpsdb', schema);

module.exports = Bpsdb;