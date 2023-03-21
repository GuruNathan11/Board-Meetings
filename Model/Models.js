var mongoose = require('mongoose');
var { Schema } = mongoose;

var Schema = new Schema({
    companyName:{
        required : true,
        type     : String
    },
    date:{
        required : true,
        type : String
    },
    agenda:{
        required : true,
        type     : String
    }
    
},{timestamps    : true,versionKey:false});

Schema.path('companyName').validate(async (companyName) => {
    const nameCount = await mongoose.models.company.countDocuments({ companyName })
    return !nameCount
},'companyName already Exists');


var users = module.exports = mongoose.model('company',Schema);
module.exports.get = function(callback,limit){
    users.find(callback).limit(limit);
}
