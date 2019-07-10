const makeStudentReports = arr => {
  const report = [];
  arr.forEach(student => report.push(`${student.name}: ${student.grade}`));
  return report;
};

const testData = [
  { name: "Jane Doe", grade: "A" },
  { name: "John Dough", grade: "B" },
  { name: "Jill Do", grade: "A" }
];

console.log(makeStudentReports(testData));



const studentData = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology',
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics',
  },
  {
    name: 'Liz',
    status: 'On leave',
    course: 'Computer science',
  },
];

function enrollInSummerSchool(students) {
  // your code here
  return students.map(student => {
  	student.status = 'In Summer school'
  	return student;
  });
}

console.log(enrollInSummerSchool(studentData));

