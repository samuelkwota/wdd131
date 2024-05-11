document.addEventListener("DOMContentLoaded", function() {
    // Function to calculate wind chill
    function calculateWindChill(temperature, windSpeed) {
        if ((temperature <= 10 && temperature >= -45) && (windSpeed > 4.8)) {
            // Calculate wind chill based on temperature in Celsius and wind speed in km/h
            let windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
            return windChill.toFixed(2) + "°C"; // Return wind chill rounded to 2 decimal places
        } else if ((temperature <= 50 && temperature >= -50) && (windSpeed > 3)) {
            // Calculate wind chill based on temperature in Fahrenheit and wind speed in mph
            let windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
            return windChill.toFixed(2) + "°F"; // Return wind chill rounded to 2 decimal places
        } else {
            return "N/A"; // If conditions are not met, return "N/A"
        }
    }

    // Example static values for temperature and wind speed
    let temperature = 5; // Example temperature in Celsius
    let windSpeed = 10; // Example wind speed in km/h

    // Display wind chill factor
    let windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById("weather").innerHTML += "<p>Wind Chill: " + windChill + "</p>";

    // Update current year in footer
    document.getElementById("currentYear").innerText = new Date().getFullYear();

    // Display last modified date in footer
    document.getElementById("lastModified").innerText = document.lastModified;
});