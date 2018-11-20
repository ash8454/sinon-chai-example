const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");

//import our getIndexPage function
const indexPage = require("../../controllers/app.controller.js");

const user = {
    addUser: (name) => {
      this.name = name;
    }
  }

describe("AppController", function() {
    // describe("getIndexPage", function() {
    //     it("should return index page", function() {
    //         let req = {};
    //         let res = {
    //            send: sinon.spy()
    //         }
    //         indexPage.getIndexPage(req, res)
    //         //console.log(res.send);
    //         expect(res.send.calledOnce).to.be.true;
    //         expect(res.send.firstCall.args[0]).to.be.equal("Hey");
    //     });
    // });

    // describe("getIndexPage", function() {
    //     it("should send hey when user is logged in", function() {
    //         let user = {
    //             isLoggedIn: function() {}
    //         }
    //         const isLoggedInStub = sinon.stub(user, "isLoggedIn").returns(true);
    //         let req = {
    //             user: user
    //         };
    //         let res = {
    //            send: sinon.spy()
    //         }
    //         indexPage.getIndexPage(req, res)
    //         //console.log(res.send);
    //         expect(res.send.calledOnce).to.be.true;
    //         expect(res.send.firstCall.args[0]).to.be.equal("Hey");
    //         expect(isLoggedInStub.calledOnce).to.be.true;
    //     });
    // });

    describe("getIndexPage", function() {
        it("should send hey when user is logged in", function() {
            let user = {
                isLoggedIn: function() {}
            }
            const isLoggedInStub = sinon.stub(user, "isLoggedIn").returns(true);
            let req = {
                user: user
            };
            let res = {
               send: function(){}
            }
            //mock res
            const mock = sinon.mock(res);

            mock.expects("send").once().withExactArgs("Hey");
            indexPage.getIndexPage(req, res)
            //console.log(res.send);
            // expect(res.send.calledOnce).to.be.true;
            // expect(res.send.firstCall.args[0]).to.be.equal("Hey");
            expect(isLoggedInStub.calledOnce).to.be.true;
            //verify that mock works as expected
            mock.verify();
        });
    });

    describe("User", function() {
        describe("addUser", function() {
            it("should add a user", function() {
                sinon.spy(user, "addUser");
                user.addUser('John Doe');
                //console.log(user.addUser);
                expect(user.addUser.calledOnce).to.be.true;
            })
        })
    })
})  
