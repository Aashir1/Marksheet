var name = prompt('Enter your name:');
var nameRef = document.getElementById('s-name');
nameRef.innerHTML = name;


var fatherName = prompt('Enter your father name:');
var fatherNameRef = document.getElementById('sf-name');
fatherNameRef.innerHTML = fatherName;

var course = prompt('Enter your course:');
var courseRef = document.getElementById('course');
courseRef.innerHTML = course;


var rollNo = prompt('Enter your rollno:');
var rollNoRef = document.getElementById('rollno');
rollNoRef.innerHTML = rollNo;


var math = +prompt('Enter your math marks:');
var mathRef = document.getElementById('math');
mathRef.innerHTML = math;

var physics = +prompt('Enter your physics marks:');
var physicsRef = document.getElementById('physics');
physicsRef.innerHTML = physics;

var chemistry = +prompt('Enter your chemistry marks:');
var chemistryRef = document.getElementById('chemistry');
chemistryRef.innerHTML = chemistry;


var english = +prompt('Enter your english marks:');
var englishRef = document.getElementById('english');
englishRef.innerHTML = english;

var urdu = +prompt('Enter your urdu marks:');
var urduRef = document.getElementById('urdu');
urduRef.innerHTML = urdu;

var totalMarksRef = document.getElementById('total_marks');
totalMarksRef.innerHTML = 500;

var obtainMarks = math + physics + chemistry + urdu + english;
var percentage = (obtainMarks / 500) * 100;
percentage = percentage.toFixed(2);
var obtainMarksRef = document.getElementById('obtained_marks');
obtainMarksRef.innerHTML = obtainMarks;
var resultRef = document.getElementById("status");
var percentageRef = document.getElementById('percentage');
percentageRef.innerHTML = percentage;

var divisionRef = document.getElementById('dividion');
var division;
if (percentage >= 60 && percentage < 100) {
    division = 'first';
}
else if (percentage >= 50 && percentage < 60) {
    division = 'second';
}
else if (percentage < 50 && percentage >= 40) {
    division = 'third';
}
else {
    division = '____';
}

divisionRef.innerHTML = division;

if (percentage >= 40) {
    resultRef.innerHTML = 'Pass';
}
else {
    resultRef.innerHTML = 'Fail';
}
if(math <40 || physics <40 || chemistry <40 || urdu <40 || english<40 ){
    resultRef.innerHTML = 'Fail';
    divisionRef.innerHTML = '_____';
}

var dateRef = document.getElementById('date');
var monthArray = ['Sun' , 'Mon' , 'Tues', 'Wed', 'Thurs', 'Fri' , 'Sat'];
var dateObj = new Date();
var date = dateObj.getDate() + " - " + monthArray[dateObj.getDay()] + ' - ' + dateObj.getFullYear();
dateRef.innerHTML = date;