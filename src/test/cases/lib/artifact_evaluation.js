const slo_lib = require('../../../main/lib/artifact_evaluations')
const { expect } = require('../../chai')
const sinon = require('sinon')

// we use a sandbox so that we can easily restore all stubs created in that sandbox
const sandbox = sinon.createSandbox();

describe('Lib - Artifact Evaluations', () => {

	describe('exists', () => {

		// this is ran after each unit test
		afterEach(() => {
			// this is needed to restore the CoursePortfolio model back to it's original state
			// we don't want to break all future unit tests
			sandbox.restore()
		})

		it('returns true if the evaluation exists', async () => {
            /*const Eval = require('../../../main/models/CoursePortfolio/Artifact/Evaluation')

            sandbox.stub(Eval, "query").returns({
                // User.query().findById()
                where: sandbox.stub().returns({
                    // An example user object
                    id: 1,
                    linkblue_username: 'egto222'
                })
            })*/

            // Act
            const result = await slo_lib.exists(1, 1)
            // Assert
            expect(result).to.be.true

        })
        
        it('returns false if the evaluation does not exist', async () => {
            //const Eval = require('../../../main/models/CoursePortfolio/Artifact/Evaluation')

            // Act
            const result = await slo_lib.exists(2, 22)
            // Assert
            expect(result).to.be.false

		})

    })

})