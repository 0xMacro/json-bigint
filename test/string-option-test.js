var expect = require('chai').expect;

describe("Testing 'storeAsString' option", function(){
    var key = '{ "key": 12345678901234567 }';
    it("Should show that the key is of type bigint", function(done){
        var JSONbig = require('../index');
        var result = JSONbig.parse(key);
        expect(typeof result.key).to.equal("bigint");
        done();
    });

    it("Should show that key is of type string, when storeAsString option is true", function(done){
        var JSONstring = require('../index')({"storeAsString": true});
        var result = JSONstring.parse(key);
        expect(typeof result.key).to.equal("string");
        done();
    });
});
