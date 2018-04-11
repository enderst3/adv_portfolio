'use strict';
// Jay McGrath helped with some of the js.
// make num list
// make empty list
// add number in reverse
// add comma every 3 numbers
function formatter(number){
    var numbers = number.split(""); // creates numers list split by ''
    numbers.reverse();// reverses the numbers to put them in 
    var new_numbers = [];// creates empty string
    
    for (var i=0; i < numbers.length; i++){ // for loop to through the len of numbers
       new_numbers.push(numbers[i]);// append new_numbers with each number in numbers
        
        if ((i+1) % 3 === 0){ // if i plus index 1 divided by 3 modulo = 0 
            if(! (i+1 === numbers.length)){ //if not i plus index 1 = len numbers
                new_numbers.push(",");// append list with comma
            }
        } 
    }
    var output_numbers = new_numbers.reverse().join("");// outputnums = new list reversed                                                      join by ''
    
    var output = document.getElementById('output');// gets the output 
    output.innerHTML = output_numbers;
}

var number = document.getElementById('user_text');// gathers user_text sets it to number  

number.addEventListener('input', function(evt) {//sets event listener for the input of the form

    formatter(this.value);// calls the function using this
    });

