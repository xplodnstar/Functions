// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var strings = ['this', 'is', 'a', 'collection', 'of', 'words'];
var instructors = [
    { firstname: 'JD', teaches: 'JavaScript' },
    { firstname: 'Tim', teaches: 'JavaScript' },
    { firstname: 'Brit', teaches: 'Ruby' },
    { firstname: 'Joe', teaches: 'iOS' },
    { firstname: 'Jake', teaches: 'JavaScript' },
    { firstname: 'Will', teaches: 'JavaScript' },
    { firstname: 'Calvin', teaches: 'JavaScript' },
    { firstname: 'James', teaches: 'Ruby' }
];


// ---------------------------
// 1. Find largest number
// ---------------------------
console.log(Math.max.apply(null, numbers))

// ---------------------------
// 2. Find longest string
// ---------------------------
strings.sort(function(a,b) {
	return a.length - b.length
})
var len = strings.length
  
console.log(strings[len-1])


// ---------------------------
// 3. Find even numbers
// ---------------------------
var even = function (num) {
return num % 2 === 0;
}

var evenArr = numbers.filter(even)

console.log(evenArr)


// ---------------------------
// 4. Find odd numbers
// ---------------------------
var odd = function (num) {
return num % 2 === 1;
}

var oddArr = numbers.filter(odd)

console.log(oddArr)

// ---------------------------
// 5. Find words that contain `is`
// ---------------------------
var text = "is";

var matches = strings.filter(function(strValue){
  if(strValue) {
      return strValue.indexOf(text) >= 0
  }
});

console.log(matches)

// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------
var numstr = numbers.concat (strings)

console.log(numstr)



// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript,
//    then sort them alphabetically
// ---------------------------
var javaArr = "JavaScript";

var teachers = instructors.filter(function(javaValue){
  if(javaValue) {
      return javaValue.indexOf(javaArr) >= 0
  }
});

console.log(teachers)





