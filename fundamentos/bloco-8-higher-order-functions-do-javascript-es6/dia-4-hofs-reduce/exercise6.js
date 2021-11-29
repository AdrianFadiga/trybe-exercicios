const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  return students.map((student, index) => ({
    name: student,
    average: ((grades[index].reduce((acc, curr) => {
      acc += curr;
      return acc;
    },0)) / 5)
  }));
};

console.log(studentAverage());