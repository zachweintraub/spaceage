import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { age } from './../src/age.js';

var userAge;

function setUserAge(){
    userAge = new age($('#dob').val());
}

function setPlanetData(planet){
    $('#planetName').text(planet);
    $('#planetAge').text(userAge.getSpaceAge(planet.toLowerCase()));
    $('#planetRemaining').text(userAge.getRemainingYears(planet.toLowerCase()));
}

$(function(){
     $('#userAge').submit(function(e){
        e.preventDefault();
        setUserAge();
        $('#allPlanets').show();
     });
     $('.planet').hover(function(){
        setPlanetData(this.id);
        $('#dataDisplay').show();
     });

});