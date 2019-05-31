export class age {
    constructor(birthday) {
        this.birthday = new Date(birthday);
    }

    getSpaceAge(planet){
        const solarYears = new Object();
        solarYears.earth = 1;
        solarYears.mercury  = 0.24;
        solarYears.venus = 0.62;
        solarYears.mars = 1.88;
        solarYears.jupiter = 11.86;

        let result = (new Date().getFullYear() - this.birthday.getFullYear()) * solarYears[planet];

        return result;
    }

}