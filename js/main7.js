function calculateBMIFromInputs() {
    const weightInput = document.getElementById("weight").value;
    const heightInput = document.getElementById("height").value;
    const resultElement = document.getElementById("result");

    try {
        const weight = parseFloat(weightInput);
        const height = parseFloat(heightInput);

        const bmi = calculateBMI(weight, height);
        resultElement.textContent = `Your BMI is ${bmi.toFixed(2)}`;
        resultElement.style.color = "black";
    } catch (error) {
        resultElement.textContent = error.message;
        resultElement.style.color = "red";
    }
}
