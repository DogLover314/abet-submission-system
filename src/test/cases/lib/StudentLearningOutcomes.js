const slo_lib = require('../../../main/lib/student_learning_outcomes')
const { expect } = require('../../chai')
const sinon = require('sinon')

// we use a sandbox so that we can easily restore all stubs created in that sandbox
const sandbox = sinon.createSandbox();

describe('Lib - StudentLearningOutcomes', () => {

	describe('exists', () => {

		// this is ran after each unit test
		afterEach(() => {
			// this is needed to restore the CoursePortfolio model back to it's original state
			// we don't want to break all future unit tests
			sandbox.restore()
		})

		it('returns true if the SlO exists', async () => {
            //const SLO = require('../../../main/models/StudentLearningOutcome/index')

            // Act
            const result = await slo_lib.exists("Design, implement, and evaluate a computing-based solution to meet a given set of computing requirements in the context of the program's discipline.")
            // Assert
            expect(result).to.be.true

        })
        
        it('returns false if the SLO does not exist', async () => {
            //const SLO = require('../../../main/models/StudentLearningOutcome/index')

            // Act
            const result = await slo_lib.exists("esign, implement, and evaluate a computing-based solution to meet a given set of computing requirements in the context of the program's discipline.")
            // Assert
           expect(result).to.be.false

		})

    })

})