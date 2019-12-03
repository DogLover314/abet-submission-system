const Department = require('../models/Department')

const exists = async (identifier, name) => {
    const departEval = await Department.query().findOne({
        identifier: identifier,
        name: name
    })
    if(departEval == null){
        return false
    }
    else {
        return true
    }
}

module.exports.exists = exists