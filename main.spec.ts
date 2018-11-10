import {greeter} from "@test/main";

describe('Greeter', function () {
    it('Greet Mr Jasmine', function () {
        expect(greeter('Mr Jasmine')).toEqual('Hello, Mr Jasmine')
    });
});