import grades from "constants/grades";

const useCGPA = courses => {
  const takenCourseGPAs = courses
    .filter(({ grade }) => Boolean(grade))
    .map(({ grade }) => grades[grade]);

  const cgpa = takenCourseGPAs.reduce((subtotal, gpa) => subtotal + gpa, 0) / takenCourseGPAs.length;

  return cgpa.toFixed(2);
};

export default useCGPA;