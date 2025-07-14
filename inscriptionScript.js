
const GOOGLE_SHEETS_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbyluVorZvojK1pgmYoIcjs1_yGo1e6kghtIqJaeS09UcqiISzkAH9YOnp2B-ZmrcJ_f/exec'; // *** IMPORTANT: Replace with your actual URL ***

const form = document.getElementById("inscription");


document.addEventListener("DOMContentLoaded", function(){
    form.reset()
}); 


const crisisButton = document.getElementById("crisisDropdownButton");
const crisisGroup = document.getElementById("crisisGroup");
const crisisNumber = document.getElementById("crisisNumber");
const crisisNames = document.getElementById("delegatesForCrisis");
var crisisNamesRowMax = 1;

const CSButton = document.getElementById("CSDropdownButton");
const CSGroup = document.getElementById("CSGroup");
const CSNumber = document.getElementById("CSNumber");
const CSNames = document.getElementById("delegatesForCS");
var CSNamesRowMax = 1;

const ACNURButton = document.getElementById("ACNURDropdownButton");
const ACNURGroup = document.getElementById("ACNURGroup");
const ACNURNumber = document.getElementById("ACNURNumber");
const ACNURNames = document.getElementById("delegatesForACNUR");
var ACNURNamesRowMax = 1;

const corteButton = document.getElementById("corteDropdownButton");
const corteGroup = document.getElementById("corteGroup");
const corteNumber = document.getElementById("corteNumber");
const corteNames = document.getElementById("delegatesForcorte");
var corteNamesRowMax = 1;

const prensaButton = document.getElementById("prensaDropdownButton");
const prensaGroup = document.getElementById("prensaGroup");
const prensaNumber = document.getElementById("prensaNumber");
const prensaNames = document.getElementById("delegatesForprensa");
var prensaNamesRowMax = 1;

const adhocButton = document.getElementById("adhocDropdownButton");
const adhocGroup = document.getElementById("adhocGroup");
const adhocNumber = document.getElementById("adhocNumber");
const adhocNames = document.getElementById("delegatesForadhoc");
var adhocNamesRowMax = 1;

const parlamentoButton = document.getElementById("parlamentoDropdownButton");
const parlamentoGroup = document.getElementById("parlamentoGroup");
const parlamentoNumber = document.getElementById("parlamentoNumber");
const parlamentoNames = document.getElementById("delegatesForparlamento");
var parlamentoNamesRowMax = 1;

const amsButton = document.getElementById("amsDropdownButton");
const amsGroup = document.getElementById("amsGroup");
const amsNumber = document.getElementById("amsNumber");
const amsNames = document.getElementById("delegatesForams");
var amsNamesRowMax = 1;

const unescoButton = document.getElementById("unescoDropdownButton");
const unescoGroup = document.getElementById("unescoGroup");
const unescoNumber = document.getElementById("unescoNumber");
const unescoNames = document.getElementById("delegatesForunesco");
var unescoNamesRowMax = 1;

const observadoresButton = document.getElementById("observadoresDropdownButton");
const observadoresGroup = document.getElementById("observadoresGroup");
const observadoresNumber = document.getElementById("observadoresNumber");
const observadoresNames = document.getElementById("delegatesForobservadores");
var observadoresNamesRowMax = 1;


function allMiniForm(button, group, number, rowMax, names){
    button.addEventListener("click", function(){
        group.classList.toggle("hidden");
    });
    
    number.addEventListener("input", function(){
        names.rows = number.value;
        rowMax = number.value;
    });
    
    names.addEventListener("keydown", function(){
        if (event.key === 'Enter'){
            const currentText = this.value;
            const currentLines = currentText.split('\n').length;
            if (currentLines >= rowMax){
                event.preventDefault();
            }
        }
    });
}


allMiniForm(crisisButton, crisisGroup, crisisNumber, crisisNamesRowMax, crisisNames);
allMiniForm(CSButton, CSGroup, CSNumber, CSNamesRowMax, CSNames);
allMiniForm(ACNURButton, ACNURGroup, ACNURNumber, ACNURNamesRowMax, ACNURNames);
allMiniForm(corteButton, corteGroup, corteNumber, corteNamesRowMax, corteNames);
allMiniForm(prensaButton, prensaGroup, prensaNumber, prensaNamesRowMax, prensaNames);
allMiniForm(adhocButton, adhocGroup, adhocNumber, adhocNamesRowMax, adhocNames);
allMiniForm(parlamentoButton, parlamentoGroup, parlamentoNumber, parlamentoNamesRowMax, parlamentoNames);
allMiniForm(amsButton, amsGroup, amsNumber, amsNamesRowMax, amsNames);
allMiniForm(unescoButton, unescoGroup, unescoNumber, unescoNamesRowMax, unescoNames);
allMiniForm(observadoresButton, observadoresGroup, observadoresNumber, observadoresNamesRowMax, observadoresNames);


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

const cupoCantidad = document.getElementById('numberSelector');
const priceTitle = document.getElementById("priceTitle");
const priceTagFront = document.getElementById("priceTag");
var total = 0;
var priceTagBack = "0$";
cupoCantidad.addEventListener("input", function(){
    total = (cupoCantidad.value) * 5;
    priceTagBack = total + "$";
    priceTitle.innerText = "Total: " + priceTagBack;
    priceTagFront.value = priceTagBack;
    console.log(priceTagFront.value);
});

const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const pwWindow = document.getElementById("pagoMovilWindow")

var paymentButtons = [option1, option2, option3];

for (let x = 0; x<paymentButtons.length;x++){
    paymentButtons[x].addEventListener("click", function(){
        for (let y = 0; y<paymentButtons.length;y++){
            if (paymentButtons[y].checked === false){
                paymentButtons[y].classList.add("buttonOff");
                paymentButtons[y].classList.remove("buttonOn");
            }
            if (paymentButtons[y].checked === true){
                paymentButtons[y].classList.remove("buttonOff");
                paymentButtons[y].classList.add("buttonOn");
            }
            if (option1.checked === true){
                pwWindow.classList.remove("hidden");
            }    
            if (option1.checked === false){
                pwWindow.classList.add("hidden");
            }    
        }
    });
}
