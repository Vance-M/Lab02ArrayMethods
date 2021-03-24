const reduceMethod = require("./reduce");

describe('reduceMethod function', () => {
    it('iterates through each item in an array and performs a reduce callback on it', () => {

        const addTwo = (item, sum) => {
            sum += item;
            return sum;
        }

        const initialValue = 0;

        const numbers = [1, 2, 3, 4, 5];
        const newArr = reduceMethod(numbers, addTwo);
  
        expect(newArr).toEqual(15);

    });
});

