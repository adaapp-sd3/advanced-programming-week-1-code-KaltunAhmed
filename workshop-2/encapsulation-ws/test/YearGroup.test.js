const chai = require('chai')
const expect = chai.expect 

const YearGroup = require('../classes/YearGroup.js')

// describe takes two params, a string of what you're testing 
//and the function
describe('YearGroup', () => {
    it('should allow an object to be instancetiated from the class', () => {
        let myYearGroup = new YearGroup
        expect(myYearGroup).to.be.instanceOf(YearGroup);
        expect(myYearGroup)
    })
})