const findTheOldest = function(people) {
    let oldestPerson = {
        name: "",
        age: 0,
    };
    // Loop every person
    people.forEach(person => {
        // if no yearofdeath, use 2022
        if (typeof(person.yearOfDeath) === "undefined") {
            person.yearOfDeath = 2022;
        }
        // Calculate age
        let age = person.yearOfDeath - person.yearOfBirth;
        // Set new maxAge if greater
        if (age > oldestPerson.age) {
            oldestPerson.name = person.name;
            oldestPerson.age = age;
        } 

    })
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
