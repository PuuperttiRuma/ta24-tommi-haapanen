{
  interface Student {
    name: string;
    credits: number;
    courses: Course[];
  }
  interface Course {
    name: string;
    grade: number;
  }

  const student: Student = {
    name: "Aili",
    credits: 45,
    courses: [
      {name: "Intro to Programming", grade: 4},
      {name: "JavaScript Basics", grade: 3},
      {name: "Functional Programming", grade: 5},
    ]
  };

  const addCourse = (courseName: string, courseGrade: number): void => {
    student.courses.push({name: courseName, grade: courseGrade});
  };

  const courseToFind = "Program Design";
  let course = student.courses.find(course => course.name === courseToFind);
  if (course){
    console.log(`${student.name} got ${course.grade} from ${course.name}.`);
  } else {
    console.log(`Course ${courseToFind} not found.`);    
  }
  addCourse("Program Design", 3);
  course = student.courses.find(course => course.name === courseToFind);
  if (course){
    console.log(`${student.name} got ${course.grade} from ${course.name}.`);
  } else {
    console.log(`Course ${courseToFind} not found.`);    
  }
}