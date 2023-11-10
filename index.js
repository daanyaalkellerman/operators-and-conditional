//operators

//addition
let addition = 13
//subtration
let subtraction = 13
//multiplication
let multiplicaiton = 10 * 8
//divide
let divide = 20 / 4

//modulus 
//take 2 numbers and divides them giving the remainder

let modulus = 15%2

//increment
// for (let x=1; x<10; x++){

// }

//conditional statements  check and compare certain values

if(addition>subtraction){
    console.log('Addition is greater than subtraction')
} 
else if(addition==subtraction){
    console.log('The numbers are equal')
}
else{
    console.log('subtraction is greater than addition')
}
//AND && multiple value and conditions are met OR || checks if one condition is met
if(addition<12 || addition<20){
    console.log('there is a number')
} else{
    console.log('there is no number')
}
//switch statement only accepts single inputs  cant put && and ||
let today = new Date().getDay();
// console.log(today);
switch(today){
    case 0:
        console.log('Today is Sunday')
    break;
    case 1:
        console.log('Today is Monday')
        break;
        case 2:
            console.log('Today is Tuesday')
            break;
        case 3:
            console.log('Today is Wednesday')
            break;
        case 4:
            console.log('Today is Thursday')
            break;
        case 5:
            console.log('Today is Friday')
            break;
        case 6:
            console.log('Today is Saturday')
            break;
}
//switch statemnets use the word case

