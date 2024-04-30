/* eslint-disable array-callback-return */
export default function updateStudentGradeByCity(
  studentsList,
  city,
  newGrades,
) {
  const newStudent = [];
  studentsList
    .filter((student) => student.location === city && newStudent.push(student))
    .map((student, idx) => {
      newGrades.map((item) => {
        if (item.studentId === student.id && item) newStudent[idx].grade = item.grade;
        else if (!newStudent[idx].grade) newStudent[idx].grade = 'N/A';
      });
    });
  return newStudent;
}
