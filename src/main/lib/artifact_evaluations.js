const ArtifactEvaluation = require('../models/CoursePortfolio/Artifact/Evaluation')

const exists = async (artifact_id, student_index) => {
    const artEval = await ArtifactEvaluation.query().findOne({artifact_id: artifact_id, student_index: student_index})
    if (artEval == null){
        return false
    }
    return true
}

module.exports.exists = exists