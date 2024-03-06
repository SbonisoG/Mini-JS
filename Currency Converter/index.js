const currencyFirst = document.getElementById("currency-first");
const worthFirst = document.getElementById("worth-first");
const currencySecond = document.getElementById("currency-second");
const worthSecond = document.getElementById("worth-second");
const exchangeRate = document.getElementById("exchange-rate");

updateRate();

function updateRate(){
    fetch(`https://v6.exchangerate-api.com/v6/c83aa0442e93c06b8a8aa88c/latest/${currencyFirst.value}`)
    .then((res) => res.json())
    .then((data)=> {
        const rate = data.conversion_rates
        [currencySecond.value];
        exchangeRate.innerText = `1 ${currencyFirst.value} = ${rate + " " + currencySecond.value}`;
        worthSecond.value = (worthFirst.value * rate).toFixed(2);
        console.log(worthSecond.value);
});
}

// event listeners to call for function when there is a change of value
currencyFirst.addEventListener("change", updateRate);
currencySecond.addEventListener("change", updateRate);
worthFirst.addEventListener("change", updateRate);