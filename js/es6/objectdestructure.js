vehicle = {
  brand: "ford",
  model: "mushtang",
  year: 2022,
  registration: {
    city: "houston",
    state: "texas",
  },
};
display = (data) => 
    console.log("without destructure = " + data.brand + " " + data.model + " " + data.year);
display2 = ({ model, brand, registration: { state } }) =>
    console.log("with destructure = " + brand + " " + model + " " + state);
display(vehicle);
display2(vehicle);
