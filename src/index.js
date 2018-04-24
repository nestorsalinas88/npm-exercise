'use strict';
 // function sayHello() {
 //     console.log("hello!")
 // }
 //
 // sayHello();
const $ = require('jquery');

require('bootstrap');

const sayHola = (name) => {
    console.log( 'estas hermoso' + name);
};
sayHola("nestor");

$('body').css('background-color', 'red');
$('body').append('<h1 class="text-primary"> hello </h1>');
$('body').append('<h4 class="text-primary"> Como estas? </h4>');
$('body').append('<h1 class="text-primary"> Bien y tu!? </h1>');






