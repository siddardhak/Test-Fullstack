const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var userSchema = new Schema({
    _id : {
        type: Schema.Types.ObjectId,
        required: true,
        },
    name : String,
    role : {
        type: String,
        enum:['admin', 'user']
    },
    company_id : {
        type: Schema.Types.ObjectId,
        ref : 'Company'
    }

});

userSchema.index({
    _id : 1,
    company_id : 1
},{
    unique:true
})


var companyModelSchema = mongoose.Model('Company',userSchema);