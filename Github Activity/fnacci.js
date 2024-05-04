function generateFibonacciSequence(terms) {
    let sequence = [];
    let firstNum = 0, secondNum = 1;
    
    sequence.push(firstNum);
    sequence.push(secondNum);
  
    for (let i = 2; i < terms; i++) {
      let nextNum = firstNum + secondNum;
      sequence.push(nextNum);
      firstNum = secondNum;
      secondNum = nextNum;
    }
  
    return sequence;
  }
  
  function validateUserInput(input) {
    return input !== '' && /^\d+$/.test(input) && Number.isInteger(parseInt(input)) && parseInt(input) > 0 && parseInt(input) < 100;
  }
  
  function startProgram() {
    do {
      let input;
      do {
        input = prompt("Enter the number of terms in the Fibonacci sequence:");
        if (!validateUserInput(input)) {
          alert("Error: Please enter a valid integer between 1 and 99.");
        }
      } while (!validateUserInput(input));
  
      let terms = parseInt(input);
      let fibonacciSequence = generateFibonacciSequence(terms);
  
      // Display in alerts
      alert("Fibonacci sequence:\n" + fibonacciSequence.join(", "));
  
      // Display in console
      console.log("Fibonacci sequence:");
      console.log(fibonacciSequence.join(", "));
  
      // Ask user if they want to continue
      let continueProgram = confirm("Press OK to generate another sequence, or Cancel to exit.");
      
      if (!continueProgram) {
        console.log("Exiting program.");
        break; // Exit the loop if user cancels
      }
    } while (true); // Loop indefinitely until user chooses to exit
  }
  
  // Call the startProgram function
  startProgram();
  