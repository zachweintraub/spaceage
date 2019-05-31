import { age } from './../src/age.js';

describe('age', function() {
    var reusableAge;

    beforeEach(function() {
        reusableAge = new age('1987-05-21');
    });

    it('should test if user age in earth years is correct', function() {
        let expected = 32.00;
        let actual = reusableAge.getSpaceAge('earth');
        expect(actual).toEqual(expected);
    });

    it('should test if user age in mercury years is correct', function() {
        let expected = 133.33;
        let actual = reusableAge.getSpaceAge('mercury');
        expect(actual).toEqual(expected);
    });

    it('should test if user age in venus years is correct', function() {
        let expected = 51.61;
        let actual = reusableAge.getSpaceAge('venus');
        expect(actual).toEqual(expected);
    });

    it('should test if user age in mars years is correct', function() {
        let expected = 17.02;
        let actual = reusableAge.getSpaceAge('mars');
        expect(actual).toEqual(expected);
    });

    it('should test if user age in jupiter years is correct', function() {
        let expected = 2.70;
        let actual = reusableAge.getSpaceAge('jupiter');
        expect(actual).toEqual(expected);
    });

    it('should test if user age in saturn years is correct', function() {
        let expected = 1.09;
        let actual = reusableAge.getSpaceAge('saturn');
        expect(actual).toEqual(expected);
    });

    it('should test if user age in uranus years is correct', function() {
        let expected = 0.38;
        let actual = reusableAge.getSpaceAge('uranus');
        expect(actual).toEqual(expected);
    });

    it('should test if user age in neptune years is correct', function() {
        let expected = 0.19;
        let actual = reusableAge.getSpaceAge('neptune');
        expect(actual).toEqual(expected);
    });

    it('should test if user age in pluto years is correct', function() {
        let expected = 0.13;
        let actual = reusableAge.getSpaceAge('pluto');
        expect(actual).toEqual(expected);
    });

});