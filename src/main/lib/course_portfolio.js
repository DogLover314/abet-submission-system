const Portfolio = require('../models/CoursePortfolio')

module.exports.new = async ({
	department_id,
	course_number,
	instructor,
	semester,
	year,
	num_students,
	student_learning_outcomes,
	section
}) => {
	// TODO
	return {
		id: 'todo'
	};
}


module.exports.get = async (portfolio_id) => {
	let raw_portfolio = await Portfolio.query()
		.eager({
			course: {
				department: true
			},
			instructor: true,
			semester: true,
			outcomes: {
				slo: {
					metrics: true
				},
				artifacts: {
					evaluations: true
				}
			}
		})
		.findById(portfolio_id)

	let portfolio = {
		portfolio_id: raw_portfolio.id,
		course_id: raw_portfolio.course_id,
		instructor: raw_portfolio.instructor,
		num_students: raw_portfolio.num_students,
		outcomes: [],
		course: {
			department: raw_portfolio.course.department.identifier,
			number: raw_portfolio.course.number,
			section: raw_portfolio.section,
			semester: raw_portfolio.semester.value,
			year: raw_portfolio.year
		},
	}

	for (let i in raw_portfolio.outcomes) {
		portfolio.outcomes.push(Object.assign({
			artifacts: raw_portfolio.outcomes[i].artifacts
		}, raw_portfolio.outcomes[i].slo))
	}

	return portfolio
}

module.exports.get_from_course = async (course_id) => {
	portfolio = await Portfolio.query().where({course_id: course_id})

	return portfolio
}

module.exports.exists = async (course_id,section,semester_term_id,year) => {
	const portEval = await Portfolio.query().findOne({
		course_id: course_id,
		section: section,
		semester_term_id: semester_term_id,
		year: year
	})
	
    if(portEval == null){
        return false
    }
    else {
        return true
	}

}