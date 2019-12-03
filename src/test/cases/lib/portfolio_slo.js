const port_slo_lib = require('../../../main/lib/portfolio_slo')
const { expect } = require('../../chai')
const sinon = require('sinon')


// we use a sandbox so that we can easily restore all stubs created in that sandbox
const sandbox = sinon.createSandbox();

describe('Lib - Portfolio SLO', () => {

	describe('exists', () => {

		// this is ran after each unit test
		afterEach(() => {
			
			sandbox.restore()
		})

		it('returns true if the evaluation exists', async () => {

            // Act
            const result = await port_slo_lib.exists(1, 1)
            // Assert
            expect(result).to.be.true

        })
        
        it('returns false if the evaluation does not exist', async () => {
            // Act
            const result = await port_slo_lib.exists(5, 55)
            // Assert
            expect(result).to.be.false

		})

    })

})