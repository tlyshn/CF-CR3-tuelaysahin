function calculateInsurance() {
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var horsePower = document.getElementById("HPCar").value;

  var e = document.getElementById("country");
  var selectedCountry = e.options[e.selectedIndex].text;

  var insurance;

  if (selectedCountry == "Austria") {
    insurance = (horsePower * 100) / (age + 50);
    console.log(insurance);
    document.getElementById("answer").innerHTML =
      name +
      ", your insurance costs " +
      Math.round(insurance).toFixed(2) +
      " €";
  } else if (selectedCountry == "Hungary") {
    insurance = (horsePower * 120) / (age + 100);
    console.log(insurance);
    document.getElementById("answer").innerHTML =
      name +
      ", your insurance costs " +
      Math.round(insurance).toFixed(2) +
      " €";
  } else if (selectedCountry == "Greece") {
    insurance = (horsePower * 150) / (age + 3 + 50);
    console.log(insurance);
    document.getElementById("answer").innerHTML =
      name +
      ", your insurance costs " +
      Math.round(insurance).toFixed(2) +
      " €";
  }
}
