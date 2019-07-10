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
    name: "Tim",
    status: "Current student",
    course: "Biology"
  },
  {
    name: "Sue",
    status: "Withdrawn",
    course: "Mathematics"
  },
  {
    name: "Liz",
    status: "On leave",
    course: "Computer science"
  }
];

function enrollInSummerSchool(students) {
  // your code here
  return students.map(student => {
    student.status = "In Summer school";
    return student;
  });
}

console.log(enrollInSummerSchool(studentData));

const findById = (items, id) => {
  return items.filter(item => item.id === id);
};

const data = [{ id: 1, foo: "bar" }, { id: 2, foo: "bizz" }];

console.log(findById(data, 2));

//--------------------------------------

const objectA = {
  id: 2,
  name: 'Jane Doe',
  age: 34,
  city: 'Chicago',
};

const objectB = {
  id: 3,
  age: 33,
  city: 'Peoria',
};

const expectedKeys = ['id', 'name', 'age', 'city'];

function validateKeys(object, expectedKeys) {
  // your code goes here
  if (Object.keys(object).length !== expectedKeys.length) return false;
  for ( key in object){
  	if (!expectedKeys.includes(key)) return false;
  }
  return true;
}

console.log(validateKeys(objectA, expectedKeys))

