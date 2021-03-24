const everyMethod = require("./every");

describe('everyMethod function', () => {
    it('iterates through each item in an array and returns true if every item is true', () => {

        const firstStartingF = (item) => {
            if(item.charAt(0).startsWith('f')){
                return true;
            }
        }

        const strings = ['flight', , 'fancy', 'fish', 'four', 'five'];
        const truthy = everyMethod(strings, firstStartingF);
  
        expect(truthy).toEqual(true);

    });
});

describe('everyMethod function', () => {
    it('iterates through each item in an array and returns true if every item is true', () => {

        const firstStartingF = (item) => {
            if(item.charAt(0).startsWith('f')){
                return true;
            }
        }

        const string = ['one', , 'two', 'three', 'four', 'five'];
        const truthy = everyMethod(string, firstStartingF);
  
        expect(truthy).toEqual(false);

    });
});