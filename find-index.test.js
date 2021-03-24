const findIndexMethod = require("./find-index");

describe('findIndexMethod function', () => {
    it('iterates through each item in an array and finds the first string starting with f callback on it', () => {

        const firstStartingF = (item) => {
            if(item.charAt(0).startsWith('f')){
                return true;
            }
        }

        const numbers = ['one', 'two', 'three', 'four', 'five'];
        const newArr = findIndexMethod(numbers, firstStartingF);
  
        expect(newArr).toEqual([3]);

    });
});

