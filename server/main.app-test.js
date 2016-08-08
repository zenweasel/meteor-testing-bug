import { expect } from "chai";
import { Meteor } from "meteor/meteor";


describe("Assertions", function () {
    it("should always fail a test", function (done) {
        Meteor.call("test/thisMethod", function () {
            expect(true).to.be.false;
            done();
        })
    })
});
