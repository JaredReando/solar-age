import { StarChild } from './starchild';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




$(document).ready(function() {
  $('#solar-submit').submit(function(event) {
    event.preventDefault();
    let userDate = $('#birthday').val();

    let userBirthday = new StarChild();
    debugger;
    let userEarthAge = userBirthday.earthAge();

    $('#solar-readout').text(userEarthAge);
    $('#birthday').val('');

  });
});
