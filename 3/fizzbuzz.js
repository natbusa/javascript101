// FizzBuzz
// rules of fizzbuzz:
// if a number is divisible by 3, print "Fizz"
// if a number is divisible by 5, print "Buzz"
// if a number is divisible by 3 and 5, print "FizzBuzz"
// otherwise, print the number

export function fizzbuzz(i) {
    if (i % 3 == 0 && i % 5 == 0) {
        return "FizzBuzz";
    } else if (i % 3 == 0) {
        return "Fizz";
    } else if (i % 5 == 0) {
        return "Buzz";
    } else {
        return i;
    }
}