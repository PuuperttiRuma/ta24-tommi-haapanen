{
  type student = {
    name: string;
    score: number;
  };

  const students = [
    { name: "Sami", score: 24.75 },
    { name: "Heidi", score: 20.25 },
    { name: "Jyrki", score: 27.5 },
    { name: "Helinä", score: 26.0 },
    { name: "Maria", score: 17.0 },
    { name: "Yrjö", score: 14.5 },
  ];

  const calculateGrade = (student: student) => {
    if (student.score > 26.0) {
      return 5;
    } else if (student.score > 23.0) {
      return 4;
    } else if (student.score > 20.0) {
      return 3;
    } else if (student.score > 17.0) {
      return 2;
    } else if (student.score >= 14.0) {
      return 1;
    } else {
      return 0;
    }
  };

  const getGrades = (students: student[]) => {
    return students.map(student => ({ name: student.name, grade: calculateGrade(student)}) );
  };

  console.log(getGrades(students));
}
