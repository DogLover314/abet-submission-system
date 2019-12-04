const Term = require('../models/Term')

const getOptions = async (termType) => {
    var options = await Term.query().select("value").where({type: termType})
    var result = []
    for(var index = 0; index < options.length; index += 1) {
        result[index] = options[index].value
    }
    return result
}

module.exports.getOptions = getOptions