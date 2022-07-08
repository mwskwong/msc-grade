import grades from "constants/grades";

const useYAxisOptions = () => ({
  domain: [grades.F, grades["A+"]],
  hide: true
});

export default useYAxisOptions;