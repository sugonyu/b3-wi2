// 1.
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}

// 2.
function greet(firstName, lastName) {
    console.log("Hello, " + fullName(firstName, lastName) + "!");
}

const full = fullName("Tony", "Yu");
console.log(full);

greet("Jane", "Doe");
