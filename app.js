const BASE_URL = "https://latest.currency-api.pages.dev/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("button");
const fromCurr = document.getElementById("from");
const toCurr = document.getElementById("to");
const msg = document.querySelector(".msg");

for(let select of dropdowns) {
    for(let currCode in countryList) {
        let option = document.createElement("option");
        option.value = currCode;
        option.innerText = `${currCode} - ${countryList[currCode]}`;
        if(select.name === "from" && currCode === "USD") {
            option.selected = true;
        }else if(select.name === "to" && currCode === "INR") {
            option.selected = true;
        }
        select.append(option);
    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}

const updateExchangeRate = async () => {
    let amount = document.querySelector(".from input");
    amtVal = amount.value;
    if(amtVal === "" || amtVal < 0) {
        amtVal = 1;
        amount.value = "1";
    }

    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
    let response  = await fetch(URL);
    let data = await response.json();
    let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];

    let finalAmt = (amtVal * rate);
    msg.innerText = `1 ${fromCurr.value} = ${rate} ${toCurr.value}`;

    let finalRate = document.querySelector(".to input");
    finalRate.value = finalAmt;
};

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/shiny/64.png`;
    let img = element.parentElement.parentElement.querySelector("img");
    img.src = newSrc;
    msg.innerText = `${fromCurr.value} to ${toCurr.value}`;
}

btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeRate();
});

window.addEventListener("load", () => {
    updateExchangeRate();
});

let input = document.querySelector(".from input");

input.addEventListener("change", () => {
    updateExchangeRate();
});

input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        updateExchangeRate();
    }
});
