{
  interface Student {
    name: string;
    credits: number;
    courseGrades: { [course: string]: number};
  }
  const student: Student = {
    name: "Aili",
    credits: 45,
    courseGrades: {
      "Intro to Programming": 4,
      "JavaScript Basics": 3,
      "Functional Programming": 5,
    },
  };

  console.log(student);
  student.courseGrades["Program Design"] = 3;  
  console.log(student);
  //student.courseGrades["Javascript Basics"] = 4; Adds a new course!! That's why spaces in keynames is bad, you can't use autocomplete with it!
  student.courseGrades["JavaScript Basics"] = 4;
  console.log(student);
}
