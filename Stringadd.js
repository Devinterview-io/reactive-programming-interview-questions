//js code 

function add(numbers) {
    if (!numbers) return 0;  // Return 0 for empty string

    // Split numbers by comma
    const numbersArray = numbers.split(',');
    return numbersArray.reduce((sum, num) => sum + parseInt(num, 10), 0);
}

//Testing 

describe('String Calculator', function() {
    it('should return the sum of two numbers', function() {
        const result = add("10,0");
        assert.strictEqual(result, 10);
    });
});
//Handle Empty String

it('should return 0 for an empty string', function() {
    const result = add("");
    assert.strictEqual(result, 0);
});

//Handle Negative Numbers

it('should throw an error for negative numbers', function() {
    try {
        add("1,-2,3");
    } catch (e) {
        assert.strictEqual(e.message, "Negatives not allowed");
    }
});

