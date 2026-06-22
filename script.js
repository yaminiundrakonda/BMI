function calculateBMI() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let result = document.getElementById("result");

  if (weight === "" || height === "") {
    result.innerHTML = "Please enter both values";
    return;
  }

  let bmi = weight / (height * height);
  bmi = bmi.toFixed(2);

  let category = "";

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi < 25) {
    category = "Normal weight";
  } else if (bmi < 30) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  result.innerHTML = `Your BMI is <b>${bmi}</b> (${category})`;
}