import { CalculateWD } from './../src/day.js';

describe('CalculateWD', () => {

    test('should correctly give the days name of the date', () => {
        let days = new CalculateWD(3,2020,1);
        // console.log(days.zeller());
        // debugger;
        expect(days.zeller()).toEqual(1);
        //expect(recshape.width).toEqual(2);

      });
      

});