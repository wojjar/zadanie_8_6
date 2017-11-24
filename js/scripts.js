// The value
var a = prompt ("Enter value a");
var b = prompt ("Enter value b");
var value = (a * a) - (2 * a * b) + (b * b);
console.log ("The score is : " +value);
 
//Checking whether the result is positive or negative
 if (value > 0) {
    console.log ("The score is positive")
} else if (value < 0) {
    console.log ("The score is negative")
}
//Checking whether the result is equal to 0
if (value == 0 ) {
    console.log ("The score is equal to ZERO")
} 