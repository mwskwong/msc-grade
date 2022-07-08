const useConcentrationsCount = courses => ({
  ft: courses.reduce(
    (subtotal, { concentrations }) =>
      concentrations && concentrations.includes("FT") ? ++subtotal : subtotal,
    0
  ),
  tie: courses.reduce(
    (subtotal, { concentrations }) =>
      concentrations && concentrations.includes("TIE") ? ++subtotal : subtotal,
    0
  )
});

export default useConcentrationsCount;