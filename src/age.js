import { solarYears } from './solarYears.js';

export class age {
    constructor(birthday) {
        this.birthday = new Date(birthday);
    }

    getSpaceAge(planet){

        let age = (new Date().getFullYear() - this.birthday.getFullYear()) / solarYears[planet];

        return parseFloat(age.toFixed(2));
    }

    getRemainingYears(planet){

        let remainingYears = 0;
        return planet;
    }

}