/************* Example 1: Step-by-step using functions *************/

function step1() {
  console.log("1st step done 1s");
  setTimeout(step2, 1000);
}

function step2() {
  console.log("2nd step done 1s");
  setTimeout(step3, 1000);
}

function step3() {
  console.log("3rd step done 1s");
  setTimeout(step4, 1000);
}

function step4() {
  console.log("4th step done 1s");
}

console.log("start");
setTimeout(step1, 1000);



/************* Example 2: Callback Hell using nested setTimeout *************/

console.log("start");

setTimeout(() => {
  console.log("1st step done 1s delay");

  setTimeout(() => {
    console.log("2nd step done 0");

    setTimeout(() => {
      console.log("3rd step done 1s");

      setTimeout(() => {
        console.log("4th step done 1s");
      }, 1000);

    }, 1000);

  }, 0);

}, 1000);



/************* Example 3: Simple Callback Example *************/

function processUser(name, callback) {
  console.log("Processing user:", name);
  callback(name);
}

processUser("alice", function (userName) {
  console.log("Welcome", userName);
});



/************* Example 4: Callback with Function Reference *************/

function greet(name, callback) {
  console.log("Hi" + name);
  callback();
}

function sayBye() {
  console.log("Bye!");
}

greet("John", sayBye);
