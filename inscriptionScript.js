const GOOGLE_SHEETS_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbyluVorZvojK1pgmYoIcjs1_yGo1e6kghtIqJaeS09UcqiISzkAH9YOnp2B-ZmrcJ_f/exec'; // *** IMPORTANT: Replace with your actual URL ***

const form = document.getElementById("inscription");

document.addEventListener("DOMContentLoaded", function () {
    form.reset()
});


const comites = {
    crisis: {
        prefix: "crisis",
        delegateCount: 0,
        delegateInputList: [],
        elements: {
            button: document.getElementById("crisisDropdownButton"),
            group: document.getElementById("crisisGroup"),
            output: document.getElementById("crisisDelegateNumberOutput"),
            miniForm: document.getElementById("miniFormcrisis"),
            cargos: document.getElementById("crisisCargos"),
            groupedData: document.getElementById("groupedcrisisData"),
            moreButton: document.getElementById("crisisMore"),
            lessButton: document.getElementById("crisisLess")
        }
    },
    cs: {
        prefix: "cs",
        delegateCount: 0,
        delegateInputList: [],
        elements: {
            button: document.getElementById("csDropdownButton"),
            group: document.getElementById("csGroup"),
            output: document.getElementById("csDelegateNumberOutput"),
            miniForm: document.getElementById("miniFormcs"),
            cargos: document.getElementById("csCargos"),
            groupedData: document.getElementById("groupedcsData"),
            moreButton: document.getElementById("csMore"),
            lessButton: document.getElementById("csLess")
        }
    },
    acnur: {
        prefix: "crisis",
        delegateCount: 0,
        delegateInputList: [],
        elements: {
            button: document.getElementById("ACNURDropdownButton"),
            group: document.getElementById("ACNURGroup"),
            output: document.getElementById("ACNURDelegateNumberOutput"),
            miniForm: document.getElementById("miniFormACNUR"),
            cargos: document.getElementById("ACNURCargos"),
            groupedData: document.getElementById("groupedACNURData"),
            moreButton: document.getElementById("ACNURMore"),
            lessButton: document.getElementById("ACNURLess")
        }
    },
    corte: {
        prefix: "corte",
        delegateCount: 0,
        delegateInputList: [],
        elements: {
            button: document.getElementById("corteDropdownButton"),
            group: document.getElementById("corteGroup"),
            output: document.getElementById("corteDelegateNumberOutput"),
            miniForm: document.getElementById("miniFormcorte"),
            cargos: document.getElementById("corteCargos"),
            groupedData: document.getElementById("groupedcorteData"),
            moreButton: document.getElementById("corteMore"),
            lessButton: document.getElementById("corteLess")
        }
    },
    prensa: {
        prefix: "prensa",
        delegateCount: 0,
        delegateInputList: [],
        elements: {
            button: document.getElementById("prensaDropdownButton"),
            group: document.getElementById("prensaGroup"),
            output: document.getElementById("prensaDelegateNumberOutput"),
            miniForm: document.getElementById("miniFormprensa"),
            cargos: document.getElementById("prensaCargos"),
            groupedData: document.getElementById("groupedprensaData"),
            moreButton: document.getElementById("prensaMore"),
            lessButton: document.getElementById("prensaLess")
        }
    },
    adhoc: {
        prefix: "adhoc",
        delegateCount: 0,
        delegateInputList: [],
        elements: {
            button: document.getElementById("adhocDropdownButton"),
            group: document.getElementById("adhocGroup"),
            output: document.getElementById("adhocDelegateNumberOutput"),
            miniForm: document.getElementById("miniFormadhoc"),
            cargos: document.getElementById("adhocCargos"),
            groupedData: document.getElementById("groupedadhocData"),
            moreButton: document.getElementById("adhocMore"),
            lessButton: document.getElementById("adhocLess")
        }
    },
    parlamento: {
        prefix: "parlamento",
        delegateCount: 0,
        delegateInputList: [],
        elements: {
            button: document.getElementById("parlamentoDropdownButton"),
            group: document.getElementById("parlamentoGroup"),
            output: document.getElementById("parlamentoDelegateNumberOutput"),
            miniForm: document.getElementById("miniFormparlamento"),
            cargos: document.getElementById("parlamentoCargos"),
            groupedData: document.getElementById("groupedparlamentoData"),
            moreButton: document.getElementById("parlamentoMore"),
            lessButton: document.getElementById("parlamentoLess")
        }
    },
    ams: {
        prefix: "ams",
        delegateCount: 0,
        delegateInputList: [],
        elements: {
            button: document.getElementById("amsDropdownButton"),
            group: document.getElementById("amsGroup"),
            output: document.getElementById("amsDelegateNumberOutput"),
            miniForm: document.getElementById("miniFormams"),
            cargos: document.getElementById("amsCargos"),
            groupedData: document.getElementById("groupedamsData"),
            moreButton: document.getElementById("amsMore"),
            lessButton: document.getElementById("amsLess")
        }
    },
    unesco: {
        prefix: "unesco",
        delegateCount: 0,
        delegateInputList: [],
        elements: {
            button: document.getElementById("unescoDropdownButton"),
            group: document.getElementById("unescoGroup"),
            output: document.getElementById("unescoDelegateNumberOutput"),
            miniForm: document.getElementById("miniFormunesco"),
            cargos: document.getElementById("unescoCargos"),
            groupedData: document.getElementById("groupedunescoData"),
            moreButton: document.getElementById("unescoMore"),
            lessButton: document.getElementById("unescoLess")
        }
    },
    observadores: {
        prefix: "observadores",
        delegateCount: 0,
        delegateInputList: [],
        elements: {
            button: document.getElementById("observadoresDropdownButton"),
            group: document.getElementById("observadoresGroup"),
            output: document.getElementById("observadoresDelegateNumberOutput"),
            miniForm: document.getElementById("miniFormobservadores"),
            cargos: document.getElementById("observadoresCargos"),
            groupedData: document.getElementById("groupedobservadoresData"),
            moreButton: document.getElementById("observadoresMore"),
            lessButton: document.getElementById("observadoresLess")
        }
    }
}

form.addEventListener("submit", async function (event) {
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

const cantidadCuposOutput = document.getElementById('cantidadCuposOutput');
const totalOutput = document.getElementById("totalOutput");
const priceSentToSheet = document.getElementById("priceSentToSheet");

const submit = document.getElementById("fake");


// Price update
function priceUpdater(){
    var inputsNotInBlank = 0;
    cantidadCuposOutput.value = inputsNotInBlank;
    priceSentToSheet.value = (inputsNotInBlank*5) + "$";
    totalOutput.innerText = `Total: ${priceSentToSheet.value}`
    for (const x in comites){
        const comite = comites[x];
        for (let v = 0; v<comite.delegateInputList.length; v++){
            if (comite.delegateInputList[v].value != ""){
                inputsNotInBlank++;
            }    
        }
    }
    cantidadCuposOutput.value = inputsNotInBlank;
    priceSentToSheet.value = (inputsNotInBlank*5) + "$";
    totalOutput.innerText = `Total: ${priceSentToSheet.value}`
}

// Give the event to the inputs
function updateEvents(){
    for (const x in comites){
        const comite = comites[x];
        for (let v = 0; v<comite.delegateInputList.length; v++){
            comite.delegateInputList[v].addEventListener("input", priceUpdater);
        }
    }    
}

// More Button Function
for (const x in comites){
    comites[x].elements.moreButton.addEventListener("click", function(){
        priceUpdater();
        let comite = comites[x];
        let elemento = comite.elements;
        comite.delegateCount++;
        elemento.output.innerText = comite.delegateCount;
        UniversialAddDelegate(elemento.group, elemento.cargos, comite.delegateCount, comite.delegateInputList);
        updateEvents();
    });
}

// Less Button Function
for (const x in comites){
    comites[x].elements.lessButton.addEventListener("click", function(){
        let comite = comites[x];
        let elemento = comite.elements;
        if (comite.delegateCount > 0){
            comite.delegateCount--;
            elemento.output.innerText = comite.delegateCount;
            UniversalRemoveDelegate(elemento.group, comite.delegateInputList);
            priceUpdater();
            updateEvents();
        }
    });
}

// Dropdown Button Function
for (const x in comites){
    let comite = comites[x];
    let elemento = comite.elements;
    elemento.button.addEventListener("click", function(){
        elemento.group.classList.toggle("hidden");
    });
}

function UniversialAddDelegate(group, cargos, delegates, delegateInputElement) {
    const delegateDiv = document.createElement('div');
    const delegateLabel = document.createElement('label');
    const lineBreak = document.createElement("br");
    const delegateInput = document.createElement('input');
    const lineBreak2 = document.createElement("br");

    group.insertBefore(delegateDiv, cargos);
    delegateDiv.appendChild(delegateLabel);
    delegateDiv.appendChild(lineBreak);
    delegateDiv.appendChild(delegateInput);
    delegateDiv.appendChild(lineBreak2);

    delegateLabel.innerText = `Delegado ${delegates} para crisis`;
    delegateInput.type = "text";
    delegateInput.id = `delegateForcrisis${delegates}`;
    delegateInput.required = true;
    delegateDiv.id = `delegateDiv${delegates}`;
    delegateInputElement.push(delegateInput);
}

function UniversalRemoveDelegate(group, delegateInputElement) {
    let lastDiv = group.lastElementChild;
    let penultimateDiv = lastDiv.previousElementSibling;
    delegateInputElement.pop();
    penultimateDiv.remove();
}

// function groupAllInputs(groupedData) {
//     groupedData[x].value = ""
//     for (let x = 0; x < delegateInputElementList.length; x++) {
//         groupedData[x].value = groupedData[x].value + delegateInputElementList[x].value + "\n";
//     }
//     const text = groupedData[x].value;
//     const lines = text.split('\n');
//     lines.pop();
//     const cleanedText = lines.join('\n');
//     groupedData[x].value = cleanedText;
// }





const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const pwWindow = document.getElementById("pagoMovilWindow")

var paymentButtons = [option1, option2, option3];

for (let x = 0; x < paymentButtons.length; x++) {
    paymentButtons[x].addEventListener("change", function () {
        for (let y = 0; y < paymentButtons.length; y++) {
            if (paymentButtons[y].checked === false) {
                paymentButtons[y].classList.add("buttonOff");
                paymentButtons[y].classList.remove("buttonOn");
            }
            if (paymentButtons[y].checked === true) {
                paymentButtons[y].classList.remove("buttonOff");
                paymentButtons[y].classList.add("buttonOn");
            }
            if (option1.checked === true) {
                pwWindow.classList.remove("hidden");
            }
            if (option1.checked === false) {
                pwWindow.classList.add("hidden");
            }
        }
    });
}