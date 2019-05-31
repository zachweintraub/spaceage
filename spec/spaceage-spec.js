import { age } from './../src/age.js';

describe('age', function() {
    var reusableAge;

    beforeEach(function() {
        reusableAge = new age('1987-05-21');
    });

    it('should test if user age in earth years is correct', function() {
        let expected = 32.00 + new Date().getFullYear() - 2019;
        let actual = reusableAge.getSpaceAge('earth');
        expect(actual).toEqual(expected);
    });

    it('should test if user age in mercury years is correct', function() {
        let expected = parseFloat((133.33 + new Date().getFullYear() - 2019).toFixed(2));
        let actual = reusableAge.getSpaceAge('mercury');
        expect(actual).toEqual(expected);
    });

    it('should test if user age in venus years is correct', function() {
        let expected = parseFloat((51.61 + new Date().getFullYear() - 2019).toFixed(2));
        let actual = reusableAge.getSpaceAge('venus');
        expect(actual).toEqual(expected);
    });

    it('should test if user age in mars years is correct', function() {
        let expected = parseFloat((17.02 + new Date().getFullYear() - 2019).toFixed(2));
        let actual = reusableAge.getSpaceAge('mars');
        expect(actual).toEqual(expected);
    });

    it('should test if user age in jupiter years is correct', function() {
        let expected = parseFloat((2.70 + new Date().getFullYear() - 2019).toFixed(2));
        let actual = reusableAge.getSpaceAge('jupiter');
        expect(actual).toEqual(expected);
    });

    it('should test if user age in saturn years is correct', function() {
        let expected = parseFloat((1.09 + new Date().getFullYear() - 2019).toFixed(2));
        let actual = reusableAge.getSpaceAge('saturn');
        expect(actual).toEqual(expected);
    });

    it('should test if user age in uranus years is correct', function() {
        let expected = parseFloat((0.38 + new Date().getFullYear() - 2019).toFixed(2));
        let actual = reusableAge.getSpaceAge('uranus');
        expect(actual).toEqual(expected);
    });

    it('should test if user age in neptune years is correct', function() {
        let expected = parseFloat((0.19 + new Date().getFullYear() - 2019).toFixed(2));
        let actual = reusableAge.getSpaceAge('neptune');
        expect(actual).toEqual(expected);
    });

    it('should test if user age in pluto years is correct', function() {
        let expected = parseFloat((0.13 + new Date().getFullYear() - 2019).toFixed(2));
        let actual = reusableAge.getSpaceAge('pluto');
        expect(actual).toEqual(expected);
    });

    it('should test if user expected remaining life expectancy in earth years is correct', function() {
        let expected = parseFloat((39.5 + new Date().getFullYear() - 2019).toFixed(2));
        let actual = reusableAge.getRemainingYears('earth');
        expect(actual).toEqual(expected);
    });

});