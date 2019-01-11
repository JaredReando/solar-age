import { StarChild } from './starchild';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';








$(document).ready(function() {
  $('#solar-submit').submit(function(event) {
    event.preventDefault();
    let userDate = $('#birthday').val();
    let newObject = new StarChild('7-29-1987', 'male');
    let userBirthday = new Date(userDate);
    let userEarthAge = newObject.earthAge(newObject.birthday);
    debugger;

    $('#solar-readout').text(userEarthAge);
    $('#birthday').val('');

  });
});
