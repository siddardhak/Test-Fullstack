const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var companySchema = new Schema({
    _id : {
        type: Schema.Types.ObjectId,
        required: true,
        unique: true
    },
    name : String,
    address : String,
    job : [{
        _id : {
            type: Schema.Types.ObjectId,
            required: true,
            unique: true
        },
        role : String,
        title : String,
        description : String,
        expiredAT : Date
    }]
});

var companyModelSchema = mongoose.Model('Company',companySchema);