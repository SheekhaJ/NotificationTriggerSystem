const chai = require('chai');
const expect = chai.expect;
var test = require('../server.js');

describe("sanity test", function(){
    it("this test should run", function(error, done){
        expect(1+1).to.equal(2);
        expect(1+3).not.to.equal(5);
        done();
    })    
});
