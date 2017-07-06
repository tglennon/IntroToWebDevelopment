function findMax(numbers) {
	var maxNumber = numbers[0];
    //var	maxNumber = 0;
  	// var currentMaxNumber;
  	
  	for (var i = 0; i < numbers.length; i++) {
        // console.log(numbers[i])
        // console.log(maxNumber)
    	if (numbers[i] > maxNumber) {
          maxNumber = numbers[i]
        }
    }
 
      return maxNumber;
 // console.log(maxNumber);
}