const findTheOldest = function(people) {
    
    const oldest = people.sort(function(a, b) {
        const lastPerson = findAge(a)
        const nextPerson = findAge(b)
        if (lastPerson>nextPerson) {
            return 1
        } else {
            return -1
        }
      });

      return oldest[oldest.length-1]
};

function findAge (person) {
    
    let death = 0

    if ("yearOfDeath" in person === false) {
    //if (!person.yearOfDeath === true) {
        death  = (new Date()).getFullYear()
    } else {
        death = person.yearOfDeath
    }

    return death - person.yearOfBirth
}

// Do not edit below this line
module.exports = findTheOldest;
