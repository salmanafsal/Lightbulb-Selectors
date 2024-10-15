console.log('JavaScript is successfully connected!');

// Write your code here

let lightbulb1 = document.querySelector('#lightbulb1');
let lightbulb2 = document.querySelector('#lightbulb2');
let lightbulb3 = document.querySelector('#lightbulb3');
let subtitle = document.querySelector('.subtitle');
let count =0;

lightbulb1.addEventListener('click', function(){
console.log("I am here");
count = count +1;
subtitle.textContent = "You've clicked the lights {$count} times"
lightbulb1.classList.toggle("active");
});


lightbulb2.addEventListener('click', function(){

    count = count +1;
    subtitle.textContent = "You've clicked the lights {$count} times"
    lightbulb2.classList.toggle("active");
        
    });


lightbulb3.addEventListener('click', function(){

    count = count +1;
    subtitle.textContent= "You've clicked the lights ${count} times";
    lightbulb3.classList.toggle("active");
        
    });

