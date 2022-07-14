const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;

  if (weight === "" || isNaN(weight)) {
    return (result.innerHTML = "Please insert your weight");
  } else if (height === "" || isNaN(height)) {
    return (result.innerHTML = "Please insert your height");
  } else {
    height = height / 100; // cm to m
    let bmi = (weight / Math.pow(height, 2)).toFixed(2); // Math.pow(base, exponent)
    if (bmi < 18.5) {
      showResult(bmi, "Underweight", "blue");
    } else if (bmi >= 18.5 && bmi < 25) {
      showResult(bmi, "Normal", "green");
    } else if (bmi >= 25 && bmi < 30) {
      showResult(bmi, "Overweight", "yellow");
    } else if (bmi >= 30 && bmi < 35) {
      showResult(bmi, "Obese", "orange");
    } else if (bmi >= 35) {
      showResult(bmi, "Extremely Obese", "red");
    }
  }
});

function showResult(bmi, message, color) {
  result.style.color = color;
  return (result.innerHTML = `BMI is ${bmi} (${message})`);
}
