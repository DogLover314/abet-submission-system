const slo_lib = require('../../../main/lib/student_learning_outcomes')
const { expect } = require('../../chai')
const sinon = require('sinon')

// we use a sandbox so that we can easily restore all stubs created in that sandbox
const sandbox = sinon.createSandbox();

describe('Lib - slo_index', () => {

	describe('exists', () => {

		// this is ran after each unit test
		afterEach(() => {
			// this is needed to restore the CoursePortfolio model back to it's original state
			// we don't want to break all future unit tests
			sandbox.restore()
		})

		it('returns true if the SlO exists', async () => {

            // Act
            const result = await slo_lib.exists(2)
            expect(result).to.be.true

        })
        
        it('returns false if the SLO does not exist', async () => {

            // Act
            const result = await slo_lib.exists(2)
            // Assert
           expect(result).to.be.false

		})

    })

})