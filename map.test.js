const mapMethod = require("./map");

describe('mapMethod function', () => {
    it('iterates through each item in an array and performs a  map callback on it', () => {

        const addTwo = (item) => {
            const newNumber = item + 2;
            return newNumber;
        }

        const numbers = [1, 2, 3, , 5];
        const newArr = mapMethod(numbers, addTwo);
  
        expect(newArr).toEqual([3, 4, 5, , 7]);

    });
});

