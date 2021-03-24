const filterMethod = require("./filter");

describe('filterMethod function', () => {
    it('iterates through each item in an array and performs a filter callback on it', () => {

        const filterByH = (item) => {
            if(item.charAt(0).startsWith('h')){
                return item;
            }
        }

        const strings = ['hi', 'hello', , 'hey', 'wassup'];
        const newArr = filterMethod(strings, filterByH);
  
        expect(newArr).toEqual(['hi', 'hello', , 'hey']);

    });
});

