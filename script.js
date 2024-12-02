document.getElementById("convertBtn").addEventListener("click", function () {
  const amount = parseFloat(document.getElementById("amount").value);
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;
  const resultDiv = document.getElementById("result");

  if (!amount || amount <= 0) {
    resultDiv.innerHTML = "<span style='color: red;'>Please enter a valid amount.</span>";
    return;
  }

  // Comprehensive currency conversion rates
  const conversionRates = {
    USD: { USD: 1, EUR: 0.85, GBP: 0.75, INR: 84.74, AUD: 1.54, CAD: 1.25, JPY: 110.0, CNY: 6.45 },
    EUR: { USD: 1.18, EUR: 1, GBP: 0.88, INR: 99.34, AUD: 1.82, CAD: 1.47, JPY: 129.5, CNY: 7.58 },
    GBP: { USD: 1.33, EUR: 1.13, GBP: 1, INR: 112.95, AUD: 2.06, CAD: 1.66, JPY: 147.2, CNY: 8.57 },
    INR: { USD: 0.012, EUR: 0.010, GBP: 0.0089, INR: 1, AUD: 0.018, CAD: 0.015, JPY: 1.30, CNY: 0.076 },
    AUD: { USD: 0.65, EUR: 0.55, GBP: 0.48, INR: 56.67, AUD: 1, CAD: 0.81, JPY: 72.0, CNY: 3.65 },
    CAD: { USD: 0.80, EUR: 0.68, GBP: 0.60, INR: 70.0, AUD: 1.23, CAD: 1, JPY: 89.0, CNY: 5.32 },
    JPY: { USD: 0.0091, EUR: 0.0077, GBP: 0.0068, INR: 0.77, AUD: 0.014, CAD: 0.011, JPY: 1, CNY: 0.059 },
    CNY: { USD: 0.15, EUR: 0.13, GBP: 0.12, INR: 13.18, AUD: 0.27, CAD: 0.19, JPY: 17.1, CNY: 1 },
  };

  if (!conversionRates[fromCurrency] || !conversionRates[fromCurrency][toCurrency]) {
    resultDiv.innerHTML = "<span style='color: red;'>Conversion rate not available.</span>";
    return;
  }

  const convertedAmount = amount * conversionRates[fromCurrency][toCurrency];

  resultDiv.innerHTML = `Converted Amount: ${convertedAmount.toFixed(2)} ${toCurrency}`;
});
