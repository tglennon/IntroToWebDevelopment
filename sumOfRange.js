// Your Challenge:
// - Create a function named sumOfRange.
// - It accepts one parameter, called numbers, that
//   represents an array of numbers. 
//

// - In your function, sum the numbers inside the array. 
//   (Reminder: you'll need a variable to store the result.)
// - Return the result.


// Hint: You do not need to create a new array - you will be 
// looping through the parameter, which is already coming in as 
// an array.

// Someone else will be calling your function like this:
// sumOfRange([1,2,3,4,5])
// sumOfRange([-4,-5,-10,0])

// Your code:

function sumOfRange(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
    currentValue = numbers[i];
    sum += currentValue
    
  }
	return sum;
}
