const Course = require('../models/Course')

const exists = async (department_id, number) => {
    const departNum = await Course.query().findOne({
        department_id: department_id,
        number: number
    })
    if(departNum == null){
        return false
    }
    else {
        return true
    }
}

module.exports.exists = exists