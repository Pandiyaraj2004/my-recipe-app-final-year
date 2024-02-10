const submitBtn = document.getElementById('submit-btn');
const textArea = document.getElementById('text-area');
const result = document.getElementById('result');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    searchnutrition();
});

async function searchnutrition() {
    const searchValue = textArea.value.trim();
    const response = await fetch(`https://api.edamam.com/api/nutrition-data?app_id=acae9bce&app_key=233b9fe4c454717efdce7e66567c5600&nutrition-type=cooking&ingr=${searchValue}`);
    const data = await response.json();
    displayNutritionInfo(data.totalNutrientsKCal); // Call function to display totalNutrientsKCal nutrition info
}

function displayNutritionInfo(totalNutrientsKCal) {
    const caloriesDisplay = document.getElementById('calories-display');
    const fatDisplay = document.getElementById('fat-display');
    const carbsDisplay = document.getElementById('carbs-display');
    const proteinDisplay = document.getElementById('protein-display');

    // Set the text content of the elements to display the nutrition information
    caloriesDisplay.textContent = `Calories: ${totalNutrientsKCal.ENERC_KCAL.quantity} ${totalNutrientsKCal.ENERC_KCAL.unit}`;
    fatDisplay.textContent = `Fat: ${totalNutrientsKCal.FAT_KCAL.quantity} ${totalNutrientsKCal.FAT_KCAL.unit}`;
    carbsDisplay.textContent = `Carbohydrates: ${totalNutrientsKCal.CHOCDF_KCAL.quantity} ${totalNutrientsKCal.CHOCDF_KCAL.unit}`;
    proteinDisplay.textContent = `Protein: ${totalNutrientsKCal.PROCNT_KCAL.quantity} ${totalNutrientsKCal.PROCNT_KCAL.unit}`;
}
