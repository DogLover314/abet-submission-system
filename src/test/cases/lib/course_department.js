const course_lib = require('../../../main/lib/course_department')
const { expect } = require('../../chai')
const sinon = require('sinon')

const sandbox = sinon.createSandbox();

describe('Lib - Course Department', () => {
    describe('Exists function', () => {
        afterEach(() => {
            sandbox.restore()
        })

        it('Returns true if department num and course num is found', async () => {
            const result = await course_lib.exists("1","498")
            expect(result).to.be.true
        })

        it('Returns false when the department num and course num is not found', async () => {
            const result = await course_lib.exists("2","499")
            expect(result).to.be.false
        })

    })
})