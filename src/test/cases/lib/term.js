const term_lib = require('../../../main/lib/term')
const { expect } = require('../../chai')
const sinon = require('sinon')

const sandbox = sinon.createSandbox();

describe('Lib - Term', () => {
    describe('Term type', () => {
        afterEach(() => {
            sandbox.restore()
        })

        it('Returns an array of options', async () => {
            const result = await term_lib.getOptions(1)
            expect(result).to.equal(['fall','spring','summer 1','summer 2','winter'])
        })

    })
})