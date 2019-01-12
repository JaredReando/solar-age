import { StarChild } from './starchild';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const planetStats =





$(document).ready(function() {
  $('#solar-submit').submit(function(event) {
    event.preventDefault();
    let userDate = $('#birthday').val();
    let newObject = new StarChild(userDate, 'male');
    let userBirthday = new Date(userDate);
    let userEarthAge = newObject.earthAge(newObject.birthday);

    $('#solar-readout').text(userEarthAge);
    $('#birthday').val('');



    let planets = ['earth', 'mars', 'jupiter'];

    planets.forEach(function(planet) {
      let ageOnPlanet = newObject.planetAge(planet);
      $(`#${planet}-list`).append(`<li class="list-group-item">Age: ${ageOnPlanet} years</li>`);
    });
  });
});
