import { solarYears } from './solarYears.js';

export class age {
    constructor(birthday) {
        this.birthday = new Date(birthday);
    }

    getSpaceAge(planet){

        let result = (new Date().getFullYear() - this.birthday.getFullYear()) / solarYears[planet];

        return parseFloat(result.toFixed(2));
    }

    getRemainingYears(planet){
        return planet;
    }

}