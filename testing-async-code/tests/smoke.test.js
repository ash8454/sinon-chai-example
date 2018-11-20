const assert = require("assert");
const chai = require("chai");
const expect = chai.expect;

describe("smoke test", function() {
    it("checks equality", () => {
        //assert.equal(true, false);
        expect(true).to.be.true;
    })
})