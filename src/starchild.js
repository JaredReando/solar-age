export class StarChild {

  constructor(birthday, sex) {
    this.birthday = birthday;
    this.sex = sex;
    this.assignLifeExpectancy();
  }

  earthAge() {
    let currentDay = new Date();
    let birthDate = new Date(this.birthday);
    let ageInMilliseconds = currentDay - birthDate;
    let ageInDays = this.millisecondsToDays(ageInMilliseconds);
    let ageInYears = Math.floor((ageInDays/365.2422));

    return ageInYears;
  }

  ageInDays() {
    let currentDay = new Date();
    let birthDate = new Date(this.birthday);
    let ageInMilliseconds = currentDay - birthDate;
    let ageInDays = this.millisecondsToDays(ageInMilliseconds);

    return ageInDays;

  }

  millisecondsToDays(milliseconds) {
    let seconds = (milliseconds/1000);
    let minutes = (seconds/60);
    let hours = (minutes/60);
    let days = (hours/24);

    return days;
  }

  assignLifeExpectancy() {
    const maleLifeExpectancy = 76;
    const femaleLifeExpectancy = 81;
    if (this.sex == 'male') {
      this.lifeExpectancy = maleLifeExpectancy;
    } else if (this.sex == 'female') {
      this.lifeExpectancy = femaleLifeExpectancy;
    }
  }



  planetAge(planet) {
    const yearInEarthDaysEarth = 365.2422;
    const yearInEarthDaysMercury = 87.97;
    const yearInEarthDaysVenus = 224.7;
    const yearInEarthDaysMars = 687;
    const yearInEarthDaysJupiter = 4332.59;
    const yearInEarthDaysSaturn = 10759;
    const yearInEarthDaysUranus = 30688.5;
    const yearInEarthDaysNeptune = 60182;
    const yearInEarthDaysPluto = 90500;
    const ageInDays = this.ageInDays();

    let planetAgeConversion

    switch(planet.toLowerCase()) {
      case 'earth':
        planetAgeConversion = (ageInDays/yearInEarthDaysEarth).toFixed(2);
        break;
      case 'mercury':
        planetAgeConversion = (ageInDays/yearInEarthDaysMercury).toFixed(2);
        break;
      case 'venus':
        planetAgeConversion = (ageInDays/yearInEarthDaysVenus).toFixed(2);
        break;
      case 'mars':
        planetAgeConversion = (ageInDays/yearInEarthDaysMars).toFixed(2);
        break;
      case 'jupiter':
        planetAgeConversion = (ageInDays/yearInEarthDaysJupiter).toFixed(2);
        break;
      case 'saturn':
        planetAgeConversion = (ageInDays/yearInEarthDaysSaturn).toFixed(2);
        break;
      case 'uranus':
        planetAgeConversion = (ageInDays/yearInEarthDaysUranus).toFixed(2);
        break;
      case 'neptune':
        planetAgeConversion = (ageInDays/yearInEarthDaysNeptune).toFixed(2);
        break;
      case 'pluto':
        planetAgeConversion = (ageInDays/yearInEarthDaysPluto).toFixed(2);
        break;
      default:
    }
    return planetAgeConversion;
  }

}
