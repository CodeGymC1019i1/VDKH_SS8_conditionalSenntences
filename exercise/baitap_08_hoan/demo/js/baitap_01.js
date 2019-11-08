function changeCurrency() {
    let inputValue = document.getElementById("input").value;
    // console.log("elementInput ==>", elementInput.value);

    let fromCurrency = document.getElementById('from-currency').value;
    let toCurrency = document.getElementById('to-currency').value;
    // console.log('fromCurrency', fromCurrency);
    // console.log('toCurrency', toCurrency);
    let result = inputValue * toCurrency / fromCurrency;
    console.log("result ==>", result);

    result = Math.round(result);

    let elementResult = document.getElementById("result");
    elementResult.innerHTML = "Result..." + result;
};
