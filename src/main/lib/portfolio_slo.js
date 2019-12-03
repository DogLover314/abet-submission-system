const path = require('../models/CoursePortfolio/StudentLearningOutcome')

const exists = async (portfolio_id, slo_id) => {
    const port_slo = await path.query().findOne({portfolio_id: portfolio_id, slo_id: slo_id})
    if (port_slo == null){
        return false
    }
    return true 
}

module.exports.exists = exists 