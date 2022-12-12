const assert = require('chai').assert;
const app=require('../app');

describe('my purpose is to check for function  beaviour ',function(){
            it('i confirm result > than 50 ',function(){
                                                            assert.isAbove(app.sum(9,3),50 ,'me not greater than 50 ');
                                                        });
            it('I confirm my string should be ',function(){
                                                                assert.equal(app.demo('Ambika'),'Ambika')
                                                        });
});
