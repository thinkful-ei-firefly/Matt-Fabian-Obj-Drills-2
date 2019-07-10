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
