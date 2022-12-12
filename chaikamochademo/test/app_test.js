const assert =require('chai').assert;
const { namereturn } = require('../app.js');
const app=require('../app.js');


describe('check name',function(){
    it("reetrun name",function(){
                        assert.equal("sai",namereturn(),"message destroyed")
                    });


    it("sum greater thatn 35",function(){
        assert.isAbove(app.sum(8,63),35,'faillllllllll');
    });


    it("sub demo",function(){
        assert.isBelow(app.sub(500,63),100,'faillllllllll');
    });
});
