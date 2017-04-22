var assert = chai.assert;
alert = function() {};

function isRomanTest(arr) {
    var mapping = ["M", "D", "C", "L", "X", "V", "I"];
    for (var i = 0; i < arr.length; i++) {
        var isRom = mapping.indexOf(arr[i]);
        if (isRom == -1) {
            return -1;
        }
    }
    return 1;
}

function isOperator(operator) {
    var operators = ['+', '-', '*']
    return operators.indexOf(operator)

}

describe('Validation', function() {
    it('should be valid entries', function() {

        var arr = [];
        var roman1 = "X"
        var roman2 = "V"
        var operator = "*"

        roman1 = roman1.split("")
        roman2 = roman2.split("")

        var isRoman1 = isRomanTest(roman1)
        var isRoman2 = isRomanTest(roman2)
        var isoperator = isOperator(operator)

        assert.notEqual(isRoman1, -1, 'these numbers are not equal');
        assert.notEqual(isRoman2, -1, 'these numbers are not equal');
        assert.notEqual(isoperator, -1, 'these numbers are not equal');

    });
});

describe('Valid Operation', function() {
    it('Output should be Roman Number', function() {
        var arr = [];


        var value = operation('X', 'L', '+')
        console.log("value " + value)

        var array = value.split("")
        var mapping = ["M", "D", "C", "L", "X", "V", "I"]
        for (i = 0; i < array.length; i++) {
            var isRoman = mapping.indexOf(array[i])
            assert.notEqual(isRoman, -1, 'This is not a Roman Number');

        }
    });
});

describe('Divide Validation', function() {
    it('X should be greater than Y', function() {
        var value = operation('V', 'X', '/')
        assert.equal(value, 'Error', 'X should be greater than Y');
    });
});

describe('Invalid Operation', function() {
    it('Invalid Output', function() {
        var value = operation('X', 'X', '+')
        assert.equal(value, 'XX', 'This is not a Roman Number ');
    });
});

describe('Negative Operation', function() {
    it('Output should be Roman Number', function() {
        var arr = [];


        var value = operation('X', 'L', '-')

        assert.equal(value, 'Error', 'This is not a Roman Number');


    });
});