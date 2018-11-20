const chai = require("chai");
const expect = chai.expect;
chai.use(require("chai-as-promised"));


function someMadeUpAyncFunc(boolValue, cb){
    setTimeout(function() {
        cb(boolValue ? "You get a sweet :)" : "You get nothing!!")
    }, 0);
}

// // Added the `only` tag to have only this set of tests to run
// describe.only("AsyncTest", function()  {
//     it("should return `You get a sweet :)` if `true` is passed in", function() {
//       someMadeUpAyncFunc(true, function(sweetCheck){
//         expect(sweetCheck).to.equal("You get a sweet :)");
//         // done();
//       });
//     });
  
//     it("should return `You get nothing!!` if `false` is passed in", function() {
//       someMadeUpAyncFunc(false, function(sweetCheck){
//         // Let's fail it on purpose just to see what happens
//         expect(sweetCheck).to.equal("You get a sweet :)");
//         // done();
//       });
//     });
//   });

  // Added the `only` tag to have only this set of tests to run
describe.only("AsyncTest", function()  {
  it("should return `You get a sweet :)` if `true` is passed in", function() {
    return expect(someMadeUpAyncFunc(true)).to.eventually.equal("You get a sweet :)");
  });

  it("should return `You get nothing!!` if `false` is passed in", function() {
    return expect(someMadeUpAyncFunc(false)).to.eventually.equal("You get nothing!!");
  });
});