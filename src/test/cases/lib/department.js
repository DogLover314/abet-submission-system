const department_lib = require('../../../main/lib/department')
const { expect } = require('../../chai')
const sinon = require('sinon')

const sandbox = sinon.createSandbox();

describe('Lib - Department', () => {
    describe('Exists function', () => {
        afterEach(() => {
            sandbox.restore()
        })

        it('Returns true when the name and identifier is found', async () => {
            const result = await department_lib.exists("cs","Computer Science")
            expect(result).to.be.true
        })

        it('Returns false when the name and identifier is not found', async () => {
            const result = await department_lib.exists("ee","Electrical Engineering")
            expect(result).to.be.false
        })

    })
})