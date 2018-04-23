'use strict';
 // function sayHello() {
 //     console.log("hello!")
 // }
 //
 // sayHello();
const $ = require('jquery');

const sayHola = (name) => {
    console.log("estas hermoso " + name )
};
sayHola("nestor");

$('body').css('background-color', 'red');
$('body').append('<h1> hello </h1>');
$('body').append('<h4> Como estas? </h4>');
$('body').append('<h1> Bien y tu!? </h1>');






