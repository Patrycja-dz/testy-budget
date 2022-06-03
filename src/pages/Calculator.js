import React, { useState, useEffect } from "react";

const API = "https://api.nbp.pl/api/exchangerates/tables/a/?format=json";
function Calculator() {
  const [currency, setCurrencies] = useState([]);
  const [result, setResult] = useState(0);
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        let currencies = data[0].rates;
        const currencyElements = currencies.filter(
          (rate) =>
            rate.code === "USD" || rate.code === "EUR" || rate.code === "CHF"
        );
        setCurrencies(currencyElements);
      })
      .catch(console.log);
  }, []);
  const calculateCurrency = (e) => {
    e.preventDefault();
    const { number, chosenCurrency } = e.target.elements;
    const amountValue = number.value;
    const currencyValue = currency.find(
      (rate) => rate.code === chosenCurrency.value
    )?.mid;
    const calculatedTotal = (amountValue * currencyValue).toFixed(2);

    setResult(calculatedTotal);
  };
  return (
    <>
      <div className="form-container">
        <h2 className="heading">Currency converter</h2>
        <form onSubmit={calculateCurrency} className="form">
          <fieldset className="form__fieldset">
            <p>
              <label className="form__label">
                <span>Amount</span>
                <input
                  type="number"
                  name="number"
                  step="0.01"
                  id="js-number"
                  className="form__field js-input"
                  placeholder="Enter the amount in zł"
                />
              </label>
            </p>
            <p>
              <label className="form__label">
                <span>Currency</span>
                <select
                  id="js-select"
                  className="form__field js-currencies"
                  name="chosenCurrency"
                >
                  <option value="">Choose currency</option>
                  <option value="EUR">EUR</option>
                  <option value="USD">USD</option>
                  <option value="CHF">CHF</option>
                </select>
              </label>
            </p>
          </fieldset>
          <p className="converter__result">
            <span>To:</span> {result} <span>zł</span>
          </p>
          <button className="js-button form__button">Przelicz</button>
        </form>
      </div>
    </>
  );
}

export default Calculator;
