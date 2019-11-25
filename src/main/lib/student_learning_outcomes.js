const SLO = require('../models/StudentLearningOutcome/index') // relative path to the User model from user.js

const exists = async (sloString) => {
    const slo = await SLO.query().select().findOne({description: sloString})
    if (slo == null){
        return false
    }
    return true
}

module.exports.exists = exists