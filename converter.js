// Function to show the relevant tab
function showTab(tabId) {
    // Hide all tabs
    document.querySelectorAll('.tab').forEach(tab => tab.classList.add('hidden'));

    // Show the selected tab
    document.getElementById(tabId).classList.remove('hidden');
}

// Simple Weight Conversion Function (Handles multiple values)
function convertWeight() {
    const input = document.getElementById('weightInput').value.split(',').map(Number);
    const unit = document.getElementById('weightUnit').value;
    let result = [];

    input.forEach(value => {
        if (unit === 'lbToKg') {
            result.push((value * 0.453592).toFixed(2)); // Pounds to Kilograms
        } else {
            result.push((value / 0.453592).toFixed(2)); // Kilograms to Pounds
        }
    });

    document.getElementById('weightResult').textContent = `Result: ${result.join(', ')}`;
}

// Simple Distance Conversion Function (Handles multiple values)
function convertDistance() {
    const input = document.getElementById('distanceInput').value.split(',').map(Number);
    const unit = document.getElementById('distanceUnit').value;
    let result = [];

    input.forEach(value => {
        if (unit === 'miToKm') {
            result.push((value * 1.60934).toFixed(2)); // Miles to Kilometers
        } else {
            result.push((value / 1.60934).toFixed(2)); // Kilometers to Miles
        }
    });

    document.getElementById('distanceResult').textContent = `Result: ${result.join(', ')}`;
}

// Simple Temperature Conversion Function (Handles multiple values)
function convertTemperature() {
    const input = document.getElementById('tempInput').value.split(',').map(Number);
    const unit = document.getElementById('tempUnit').value;
    let result = [];

    input.forEach(value => {
        if (unit === 'cToF') {
            result.push(((value * 9/5) + 32).toFixed(2)); // Celsius to Fahrenheit
        } else {
            result.push(((value - 32) * 5/9).toFixed(2)); // Fahrenheit to Celsius
        }
    });

    document.getElementById('tempResult').textContent = `Result: ${result.join(', ')}`;
}