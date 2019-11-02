const CoursePortfolio = require('../../../../main/models/CoursePortfolio')
const { expect } = require('../../../chai')

describe('Model - CoursePortfolio', () => {

	describe('lookup', () => {

		it('with id', async () => {
			const slo = await CoursePortfolio.query()
				.findById(1)

			expect(slo).to.deep.equal({
				id: 1,
				course_id: 1,
				instructor_id: 1,
				semester_term_id: 1,
				num_students: 5,
				section: 1,
				year: 2019
			})
		})
	})

	describe('relations', () => {

		it('belongs to course', async () => {
			const portfolio = await CoursePortfolio.query()
				.findById(1)
			const course = await portfolio.$relatedQuery('course')

			expect(course).to.have.property('number', 498)
		})

		it('belongs to instructor', async () => {
			const portfolio = await CoursePortfolio.query()
				.findById(1)
			const slo_metrics = await portfolio.$relatedQuery('instructor')

			expect(slo_metrics).to.have.property('linkblue_username', 'user')
		})

		it('has semester term', async () => {
			const portfolio = await CoursePortfolio.query()
				.findById(1)
			const semester = await portfolio.$relatedQuery('semester')

			expect(semester).to.have.property('value', 'fall')
		})

		it('has many student learning outcomes', async () => {
			const portfolio = await CoursePortfolio.query()
				.findById(1)
			const outcomes = await portfolio.$relatedQuery('outcomes')

			expect(outcomes).to.have.length(1)
		})

	})

	describe('functions', () => {
		it('gets the date', async () => {
			const slo = await CoursePortfolio.query().findById(1)

			expect(slo.date).to.deep.equal([1, 2019])
		})

		it('gets the department id', async () => {
			const portfolio = await CoursePortfolio.query().findById(1)
			const result = await portfolio.getDepartmentId()

			expect(result).to.equal(1)
		})

		it('Get all portfolios in the department of the current portfolio', async () => {
			const portfolio = await CoursePortfolio.query().findById(1)

			const result = await portfolio.getAllPortfoliosInDepartment()

			expect(result).to.deep.equal([
				portfolio
			])
		})

		it('get the instructor name', async () => {
			const portfolio = await CoursePortfolio.query().findById(1)
			const result = await portfolio.getInstructorName()

			expect(result).to.equal('user')
		})

		it('Get all portfolios by Instructor name', async () => {
			const portfolio = await CoursePortfolio.query().findById(1)
			const result = await portfolio.getAllPortfoliosByInstructor()

			expect(result).to.deep.equal([
				portfolio
			])
		})
		
		it('gets num of students', async ()=>  {
			const slo = await CoursePortfolio.query().findById(1)
	
			expect(slo.numStudents).to.deep.equal([5])
		})

	})

})