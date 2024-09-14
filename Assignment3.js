// ***Shallow Copy 
const person1 = {
    name: 'John',
    age: 25
  };
  
 
  const person2 = { ...person1 };
  

  person2.age = 30;
  

  console.log('person1:', person1);
  console.log('person2:', person2);
  
  
  if (person1.age === person2.age) {
    console.log('person1\'s age has changed.');
  } else {
    console.log('person1\'s age has not changed.');
  }
  
  // ***Deep Copy

  
function deepCopy(obj) {
    
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
  
   
    const copy = Array.isArray(obj) ? [] : {};
  
   
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        copy[key] = deepCopy(obj[key]);
      }
    }
  
    return copy;
  }
  

  const original = {
    name: 'John',
    age: 25,
    address: {
      city: 'New York',
      zip: 10001
    },
    hobbies: ['reading', 'gaming']
  };
  

  const copied = deepCopy(original);
  

  copied.address.city = 'Los Angeles';
  copied.hobbies.push('coding');
  

  console.log('Original:', original);
  console.log('Copied:', copied);

  // ***Data Structures and Operators - Restaurant code 

const restaurant = {
    name: 'The Gourmet Kitchen',
    location: 'Downtown City',
    menu: [
      {
        name: 'Pasta Primavera',
        price: 12.99,
        description: 'Fresh vegetables and pasta in a light tomato sauce.'
      },
      {
        name: 'Margherita Pizza',
        price: 9.99,
        description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.'
      }
    ]
  };
  

  const newMenuItem = {
    name: 'Grilled Chicken Sandwich',
    price: 8.99,
    description: 'Grilled chicken breast with lettuce, tomato, and aioli on a toasted bun.'
  };
  
  
  restaurant.menu = [...restaurant.menu, newMenuItem];
  
  
  const restaurantJSON = JSON.stringify(restaurant, null, 2); 
 
  console.log('Restaurant Object as JSON:');
  console.log(restaurantJSON);
  
  // ***JSON Parameters 

  
function logJsonProperties(jsonObj) {
    
    for (let key in jsonObj) {
      if (jsonObj.hasOwnProperty(key)) {
        console.log(`${key}: ${jsonObj[key]}`);
      }
    }
  }
  
 
  const exampleJson = {
    name: "The Gourmet Kitchen",
    location: "Downtown City",
    menu: [
      {
        name: "Pasta Primavera",
        price: 12.99,
        description: "Fresh vegetables and pasta in a light tomato sauce."
      },
      {
        name: "Margherita Pizza",
        price: 9.99,
        description: "Classic pizza with fresh tomatoes, mozzarella, and basil."
      }
    ]
  };
  
  
  logJsonProperties(exampleJson);

  // ***advanced functions (default parameters)

  function calculateArea(width = 5, height = 10) {
    return width * height;
  }
  
  
  console.log('Area with default values:', calculateArea());
  

  console.log('Area with custom values (7, 3):', calculateArea(7, 3));
  

  console.log('Area with custom width (8), default height:', calculateArea(8));

  // // Function to modify a primitive value
function modifyPrimitive(value) {
    value = value * 2;
    console.log('Inside modifyPrimitive, value:', value);
  }
  
  // Function to modify an object
  function modifyObject(obj) {
    obj.age = obj.age * 2;
    console.log('Inside modifyObject, obj:', obj);
  }
  
  // Primitive value example
  let number = 10;
  console.log('Before modifyPrimitive, number:', number);
  modifyPrimitive(number);
  console.log('After modifyPrimitive, number:', number);  // Unchanged
  
  // Object example
  let person = {
    name: 'John',
    age: 25
  };
  console.log('Before modifyObject, person:', person);
  modifyObject(person);
  console.log('After modifyObject, person:', person);  // Changed

  // ***callback functions 

 // Create a function that takes a callback function and a delay
function executeAfterDelay(callback, delay) {
    console.log(`Waiting for ${delay} milliseconds...`);
    
    // Call the callback function after the specified delay
    setTimeout(() => {
      callback();
    }, delay);
  }
  
  // Example callback function
  function myCallback() {
    console.log('Callback function executed!');
  }
  
  // Call the function with the callback and delay of 2000ms (2 seconds)
  executeAfterDelay(myCallback, 2000);
  
// ****Functions returning functions 

// Create a function that returns another function
function outerFunction() {
    return function innerFunction() {
      console.log('Inner function has been called!');
    };
  }
  
  // Test the returned function
  const returnedFunction = outerFunction(); // Call the outer function and get the returned function
  returnedFunction(); // Call the inner function

  // ***call(), apply() and bind() with objects

  // Flight booking object
const flightBooking = {
    airline: 'Jet Airways',
    flightNumber: 'JA123',
    passenger: {
      name: 'John Doe',
      passportNumber: 'A12345678'
    },
    // Method to display flight details
    displayDetails() {
      console.log(`Passenger: ${this.passenger.name}, Flight: ${this.airline} ${this.flightNumber}`);
    }
  };
  
  // Another object representing a different booking context
  const anotherBooking = {
    airline: 'Air India',
    flightNumber: 'AI456',
    passenger: {
      name: 'Jane Smith',
      passportNumber: 'B98765432'
    }
  };
  
  // Using 'call' to invoke displayDetails in the context of anotherBooking
  flightBooking.displayDetails.call(anotherBooking);  // Jane Smith, Air India AI456
  
  // Using 'apply' to invoke displayDetails in the context of anotherBooking
  flightBooking.displayDetails.apply(anotherBooking);  // Jane Smith, Air India AI456
  
  // Using 'bind' to create a new function with 'anotherBooking' context
  const displayForAnother = flightBooking.displayDetails.bind(anotherBooking);
  displayForAnother();  // Jane Smith, Air India AI456
  

// ***IIFE, Closure and Self Executing functions

//1.(IIFE) IIFE to create a counter with private scope
const counter = (function() {
    let count = 0; // Private variable
  
    return {
      increment: function() {
        count++;
        console.log('Current count:', count);
      },
      decrement: function() {
        count--;
        console.log('Current count:', count);
      },
      getCount: function() {
        console.log('Current count:', count);
        return count;
      }
    };
  })();
  
  // Using the counter object
  counter.increment();  // Current count: 1
  counter.increment();  // Current count: 2
  counter.decrement();  // Current count: 1
  console.log('Final count:', counter.getCount()); // Final count: 1


  
  // 2. Closure 

  // Function that returns a function remembering a value
function createCounter(initialValue) {
    let count = initialValue; // This is a private variable, closed over by the inner function
  
    return function() {
      count++;
      console.log('Current count:', count);
      return count;
    };
  }
  
  // Create a counter starting at 10
  const myCounter = createCounter(10);
  
  // Call the returned function multiple times
  myCounter(); // Current count: 11
  myCounter(); // Current count: 12
  myCounter(); // Current count: 13
  

 // 3. Self-Executing functions
 
 // Self-executing function that initializes a variable
(function() {
    // Initialize a variable
    const message = 'Life is full of competion and love is the prize :)';
    
    // Log the value of the variable
    console.log(message);
  })();

// ***String methods 

// Define a string for demonstration
const str = '  JavaScript is a powerful language.  ';

// 1. split: Splits the string into an array of substrings based on a delimiter
const words = str.split(' ');
console.log('split:', words);

// 2. join: Joins an array of strings into a single string with a specified delimiter
const joined = words.join('-');
console.log('join:', joined);

// 3. toUpperCase: Converts the entire string to uppercase
const upperCase = str.toUpperCase();
console.log('toUpperCase:', upperCase);

// 4. toLowerCase: Converts the entire string to lowercase
const lowerCase = str.toLowerCase();
console.log('toLowerCase:', lowerCase);

// 5. padStart: Pads the string from the start with another string to reach the given length
const paddedStart = str.trim().padStart(50, '*');
console.log('padStart:', paddedStart);

// 6. padEnd: Pads the string from the end with another string to reach the given length
const paddedEnd = str.trim().padEnd(50, '*');
console.log('padEnd:', paddedEnd);

// 7. slice: Extracts a section of the string and returns it as a new string
const sliced = str.slice(5, 16);
console.log('slice:', sliced);

// 8. repeat: Repeats the string a specified number of times
const repeated = str.trim().repeat(3);
console.log('repeat:', repeated);

// 9. replace: Replaces the first occurrence of a substring with another substring
const replaced = str.replace('powerful', 'amazing');
console.log('replace:', replaced);

// 10. trim: Removes whitespace from both ends of the string
const trimmed = str.trim();
console.log('trim:', trimmed);

// 11. startsWith: Checks if the string starts with a specified substring
const startsWithJavaScript = str.startsWith('JavaScript');
console.log('startsWith:', startsWithJavaScript);

// 12. endsWith: Checks if the string ends with a specified substring
const endsWithLanguage = str.endsWith('language.');
console.log('endsWith:', endsWithLanguage);

// 13. includes: Checks if the string contains a specified substring
const includesPowerful = str.includes('powerful');
console.log('includes:', includesPowerful);


// ***Masking a credit card example

// 1. Mask a credit card number using padStart and padEnd
function maskCreditCard(cardNumber) {
    const lastFourDigits = cardNumber.slice(-4);
    const maskedSection = cardNumber.slice(0, -4).replace(/./g, '*');
    return maskedSection + lastFourDigits;
  }
  
  // Example credit card number
  const creditCardNumber = '1234567812345678';
  console.log('Masked Credit Card Number:', maskCreditCard(creditCardNumber));
  
  // 2. Capitalize the first letter of each word in a sentence
  function capitalizeFirstLetter(sentence) {
    return sentence.split(' ').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  }
  
  // Example sentence
  const sentence = 'the quick brown fox jumps over the lazy dog';
  console.log('Capitalized Sentence:', capitalizeFirstLetter(sentence));
  
  // 3. Compare email addresses for equality
  function areEmailsEqual(email1, email2) {
    return email1.trim().toLowerCase() === email2.trim().toLowerCase();
  }
  
  // Example email addresses
  const email1 = 'Example.Email@Domain.com';
  const email2 = 'example.email@domain.com';
  console.log('Are emails equal?', areEmailsEqual(email1, email2));


// Boolean methods

// Define a string for demonstration
const text = 'JavaScript is a versatile language. JavaScript is widely used.';

// 1. indexOf: Returns the index of the first occurrence of a substring
const firstIndex = text.indexOf('versatile');
console.log('indexOf "versatile":', firstIndex); // Output: 17

// 2. lastIndexOf: Returns the index of the last occurrence of a substring
const lastIndex = text.lastIndexOf('JavaScript');
console.log('lastIndexOf "JavaScript":', lastIndex); // Output: 43

// 3. startsWith: Checks if the string starts with a specified substring
const startsWithJavaScript = text.startsWith('JavaScript');
console.log('startsWith "JavaScript":', startsWithJavaScript); // Output: false

// 4. endsWith: Checks if the string ends with a specified substring
const endsWithWidelyUsed = text.endsWith('widely used.');
console.log('endsWith "widely used.":', endsWithWidelyUsed); // Output: true

// 5. includes: Checks if the string contains a specified substring
const includesVersatile = text.includes('versatile');
console.log('includes "versatile":', includesVersatile); // Output: true


// last question

// Define a string for demonstration
const text = 'The quick brown fox jumps over the lazy dog.';

// Check if the string starts with a specific substring
function checkStartsWith(str, substring) {
  return str.startsWith(substring);
}

// Check if the string ends with a specific substring
function checkEndsWith(str, substring) {
  return str.endsWith(substring);
}

// Find the index of a specific substring within the string
function findIndexOfSubstring(str, substring) {
  return str.indexOf(substring);
}

// Example substrings
const startSubstring = 'The quick';
const endSubstring = 'lazy dog.';
const searchSubstring = 'fox';

// Check if the string starts or ends with the specified substrings
const startsWith = checkStartsWith(text, startSubstring);
const endsWith = checkEndsWith(text, endSubstring);
const indexOf = findIndexOfSubstring(text, searchSubstring);

// Display results
console.log(`Starts with "${startSubstring}":`, startsWith); // Output: true
console.log(`Ends with "${endSubstring}":`, endsWith);       // Output: true
console.log(`Index of "${searchSubstring}":`, indexOf);      // Output: 16


  
  
  
  

  
  