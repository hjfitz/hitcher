const chain = require('../dist').default
const {expect} = require('chai')

describe('chain()', () => {
	it('should find a key', () => {
		const obj = {first: {initial: 'h'}}
		const resp = chain(obj, 'first', 'initial')
		expect(resp).to.equal('h')
	})

	it('should return undefined if no prop exists', () => {
		const obj = {first: 'oi'}
		const resp = chain(obj, 'first', 'initial', 'charcode')
		expect(resp).to.be.undefined
	})

	it('not fall over if an empty object is passed', () => {
		const obj = {}
		const resp = chain(obj, 'this', 'does', 'not', 'exist')
		expect(resp).to.be.undefined
	})
})