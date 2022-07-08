import gga from "constants/gga";
import grades from "constants/grades";
import useCGPA from "./useCGPA";

const useMinRequiredGrade = courses => {
  const cgpa = useCGPA(courses);
  const numOfCourses = courses.length;
  const numOfTakenCourses = courses.reduce((subtotal, { grade }) => grade ? ++subtotal : subtotal, 0);
  const numOfUnTakenCourses = numOfCourses - numOfTakenCourses;

  const minRequiredGPA = (gga * numOfCourses - cgpa * numOfTakenCourses) / numOfUnTakenCourses;

  for (const grade in grades) {
    if (grades[grade] >= minRequiredGPA)
      return grade;
  }
};

export default useMinRequiredGrade;