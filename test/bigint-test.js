var expect = require('chai').expect;

describe("Testing bigint support", function(){
    var input = '{"big":9223372036854775807,"small":123}';

    it("Should show classic JSON.parse lacks bigint support", function(done){
        var obj = JSON.parse(input);
        expect(obj.small.toString(), "string from small int").to.equal("123");
        expect(obj.big.toString(), "string from big int").to.not.equal("9223372036854775807");

        var output = JSON.stringify(obj);
        expect(output).to.not.equal(input);
        done();
    });

    it("Should show JSONbig does support bigint parse/stringify roundtrip", function(done){
        var JSONbig = require('../index');
        var obj = JSONbig.parse(input);
        expect(obj.small.toString(), "string from small int").to.equal("123");
        expect(obj.big.toString(), "string from big int").to.equal("9223372036854775807");
        expect(typeof obj.big, "big int").to.equal('bigint');

        var output = JSONbig.stringify(obj);
        expect(output).to.equal(input);
        done();
    });
});
