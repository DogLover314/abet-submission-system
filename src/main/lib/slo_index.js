const SLO = require('../models/StudentLearningOutcome/index') 

const exists = async (sloInteger) => {
    const slo = await SLO.query().select().findOne({index: sloInteger})
    if (slo == null){
        return false
    }
    return true
}

module.exports.exists = exists