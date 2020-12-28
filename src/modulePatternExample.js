
// object literal notation
var objectLiteral = {
  key: "val",
  log: function() {
    console.log("hello");
  }
}

// prints hello
objectLiteral.log();

// this is how u can add new properties
objectLiteral.newProperty = 23;

/** MODULE PATTERN 
 * Module pattern was originally defined as a way to provide both 
 * private and public encapsulation for classes in conventional software engineering.
 * 
 * In JavaScript, the Module pattern is used to further emulate the concept of 
 * classes in such a way that we're able to include both public/private methods 
 * and variables inside a single object, thus shielding particular parts from the global scope.
*/

var testModule = (function () {

  // private variable
  var counter = 0;

  // private function
  myPrivateMethod = function() {
    console.log(counter);
  }

  return {
    //public variable
    publicString: "hello",

    // public function
    incrementCounter: function () {
      return counter++;
    },

    resetCounter: function () {
      console.log("counter used to be: ", counter);
      counter = 0;
    }
  }
})();

