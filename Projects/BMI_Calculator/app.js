function calculateBMI(event) {
    event.preventDefault();
    let weight = document.getElementById("weight").value;
    weight.value = '';
    let height = document.getElementById("height").value;
    height.value = '';
    let bmi = weight / ((height / 100) ** 2);
    let bmiresult = document.getElementById("result").innerText = `Your BMI is: ${bmi.toFixed(2)}`;
    let category = document.getElementById("category");
    let categoryText = '';
    if (bmi < 18.5) {
        categoryText = 'You are underweight.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        categoryText = 'You have a normal weight.';
    } else if (bmi >= 25 && bmi < 29.9) {
        categoryText = 'You are overweight.';
    } else {
        categoryText = 'You are obese.';
    }
    category.innerText = categoryText;
}