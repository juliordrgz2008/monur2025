const GOOGLE_SHEETS_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbyluVorZvojK1pgmYoIcjs1_yGo1e6kghtIqJaeS09UcqiISzkAH9YOnp2B-ZmrcJ_f/exec'; // *** IMPORTANT: Replace with your actual URL ***

const form = document.getElementById("inscription");
form.addEventListener("submit", async function(event) {
    event.preventDefault(); 

    // Gather form data
    const formData = new FormData(form);
    const data = {};
    for (const [key, value] of formData.entries()) {
        data[key] = value;
    }

    try {
        const response = await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
            method: 'POST',
            mode: 'no-cors', // Essential for Google Apps Script as it doesn't send CORS headers
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(data).toString(), // Send data as URL-encoded form data
        });

        // The 'no-cors' mode means you won't be able to read the response status directly (e.g., response.ok)
        // You'll generally assume success if the fetch operation completes without an error.
        // For debugging, you can check your Google Sheet.

        console.log("Form data sent to Google Sheet.");

        window.location.href = 'thankyou.html';

    } catch (error) {
        console.error("Error submitting form:", error);
        // Optionally, display an error message to the user
        alert("Hubo un error al enviar tu inscripción. Por favor, inténtalo de nuevo.");
    }
});
