// The value
var a = prompt ("Enter value a");
var b = prompt ("Enter value b");
var value = (a * a) - (2 * a * b) + (b * b);
console.log ("The score is : " +value);

if (value == 0 ) {
    console.log ("The score is equal to ZERO")
} else if (value > 0) {
    console.log ("The score is positive")
} else {
    console.log ("The score is negative")
}
