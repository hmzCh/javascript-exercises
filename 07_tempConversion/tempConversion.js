const ftoc = function(input) {
  let unrouded = (input-32) * (5/9)
  return Math.round(unrouded * 10) / 10
};

const ctof = function(input) {
  let unrouded = input * (9/5) + 32
  return Math.round(unrouded * 10) / 10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
