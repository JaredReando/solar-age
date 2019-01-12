import { StarChild } from './starchild';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


$(document).ready(function() {
  $('#solar-submit').submit(function(event) {
    event.preventDefault();
    let userDate = $('#birthday').val();
    let newObject = new StarChild(userDate, 'male');
    let userBirthday = new Date(userDate);
    let userEarthAge = newObject.earthAge(newObject.birthday);

    $('#solar-readout').text(userEarthAge);
    $('#birthday').val('');

    let planets = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto'];

    planets.forEach(function(planet) {
      let ageOnPlanet = newObject.planetAge(planet);
      let capitalPlanet = planet.charAt(0).toUpperCase() + planet.slice(1);
      $(`#${planet}-list`).empty();
      $(`#${planet}-list`).append(`<li class="list-group-item">Age: ${ageOnPlanet} years</li>`);
      $(`#${planet}-list`).append(`<li class="list-group-item">Dead in: 1 ${capitalPlanet} day</li>`);
    });
  });
});
