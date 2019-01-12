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
    let ageInEarthDays = this.millisecondsToDays(ageInMilliseconds);
    let ageInYears = Math.floor((ageInEarthDays/365.2422));

    return ageInYears;
  }

  ageInEarthDays() {
    let currentDay = new Date();
    let birthDate = new Date(this.birthday);
    let ageInMilliseconds = currentDay - birthDate;
    let ageInEarthDays = this.millisecondsToDays(ageInMilliseconds);

    return ageInEarthDays;

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

  tickTock(planet) {
    const yearInEarthDaysEarth = 365.2422;
    const yearInEarthDaysMercury = 87.97;
    const yearInEarthDaysVenus = 224.7;
    const yearInEarthDaysMars = 687;
    const yearInEarthDaysJupiter = 4332.59;
    const yearInEarthDaysSaturn = 10759;
    const yearInEarthDaysUranus = 30688.5;
    const yearInEarthDaysNeptune = 60182;
    const yearInEarthDaysPluto = 90500;

    let ageInEarthDays = this.ageInEarthDays();
    let lifeExpectancyInEarthDays = (this.lifeExpectancy * yearInEarthDaysEarth);
    let earthDaysLeft = (lifeExpectancyInEarthDays - ageInEarthDays);

    let lifeLeftInPlanetYears;

    switch(planet.toLowerCase()) {
      case 'earth':
        lifeLeftInPlanetYears = (earthDaysLeft/yearInEarthDaysEarth).toFixed(2);
        break;
      case 'mercury':
        lifeLeftInPlanetYears = (earthDaysLeft/yearInEarthDaysMercury).toFixed(2);
        break;
      case 'venus':
        lifeLeftInPlanetYears = (earthDaysLeft/yearInEarthDaysVenus).toFixed(2);
        break;
      case 'mars':
        lifeLeftInPlanetYears = (earthDaysLeft/yearInEarthDaysMars).toFixed(2);
        break;
      case 'jupiter':
        lifeLeftInPlanetYears = (earthDaysLeft/yearInEarthDaysJupiter).toFixed(2);
        break;
      case 'saturn':
        lifeLeftInPlanetYears = (earthDaysLeft/yearInEarthDaysSaturn).toFixed(2);
        break;
      case 'uranus':
        lifeLeftInPlanetYears = (earthDaysLeft/yearInEarthDaysUranus).toFixed(2);
        break;
      case 'neptune':
        lifeLeftInPlanetYears = (earthDaysLeft/yearInEarthDaysNeptune).toFixed(2);
        break;
      case 'pluto':
        lifeLeftInPlanetYears = (earthDaysLeft/yearInEarthDaysPluto).toFixed(2);
        break;
      default:
    }
    return lifeLeftInPlanetYears;
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
    const ageInEarthDays = this.ageInEarthDays();

    let planetAgeConversion

    switch(planet.toLowerCase()) {
      case 'earth':
        planetAgeConversion = (ageInEarthDays/yearInEarthDaysEarth).toFixed(2);
        break;
      case 'mercury':
        planetAgeConversion = (ageInEarthDays/yearInEarthDaysMercury).toFixed(2);
        break;
      case 'venus':
        planetAgeConversion = (ageInEarthDays/yearInEarthDaysVenus).toFixed(2);
        break;
      case 'mars':
        planetAgeConversion = (ageInEarthDays/yearInEarthDaysMars).toFixed(2);
        break;
      case 'jupiter':
        planetAgeConversion = (ageInEarthDays/yearInEarthDaysJupiter).toFixed(2);
        break;
      case 'saturn':
        planetAgeConversion = (ageInEarthDays/yearInEarthDaysSaturn).toFixed(2);
        break;
      case 'uranus':
        planetAgeConversion = (ageInEarthDays/yearInEarthDaysUranus).toFixed(2);
        break;
      case 'neptune':
        planetAgeConversion = (ageInEarthDays/yearInEarthDaysNeptune).toFixed(2);
        break;
      case 'pluto':
        planetAgeConversion = (ageInEarthDays/yearInEarthDaysPluto).toFixed(2);
        break;
      default:
    }
    return planetAgeConversion;
  }

}
var jared = new StarChild('7-29-1987', 'male')
