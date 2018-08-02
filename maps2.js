var words = ["ground", "control", "to", "major", "tom"];


var length = words.map(function(word) {
  return word.length;
});

var upper = words.map(function(word) {
  return word.toUpperCase();
});

var split = words.map(function(word) {
  return word.split('').reverse().join('');
});

console.log(length)
console.log(upper)
console.log(split)