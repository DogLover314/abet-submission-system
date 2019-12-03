const Term = require('../models/Term')

const getOptions = async (term) => {
    var options = await Term.query().select("term").where({term: term})
    return options["value"]
}

module.exports.getOptions = getOptions