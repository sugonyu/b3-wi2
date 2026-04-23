pr = console.log;

const input = document.getElementById("name-input");
const btn = document.getElementById("greet-button");
const output = document.getElementById("output");

//test
// if (input) input.value = "11";
// if (btn) btn.textContent = "22";

btn.addEventListener("click", () => {
  let str = input.value.trim();
  if (str == "") {
    output.textContent = "Please entger somthing";
  } else {
    setTimeout(() => {
      output.textContent = "Hello " + str;
    }, 1000);
  }
});

/**
 * Exercise
 */

/*

1. load in DOM elements

nameinput
greet button
output

2. add an event listener to the button

continuation function for it should be:

1. take the input value and trim it

2. (condition)
validate that the input is not an empty string
if it is --> update output text to :
                 Please enter something

3. after 1000ms , update the output with:
                 Hello, INPUT_VALUE
 
*/
