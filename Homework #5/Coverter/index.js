const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
let USDNow;

async function getUSDCurrency() {
  const res = await fetch("http://www.floatrates.com/daily/usd.json")
    .then((r) => r.json())
    .then((r) => r);
  USDNow = res.amd.rate;

  return;
}
getUSDCurrency();

function getResult() {
  setTimeout(function () {
    const inpVal = fromCurrency.value;
    if (Number(inpVal) != inpVal || inpVal[0] == "0") {
      toCurrency.value = "Wrong Input";
      return;
    }
    toCurrency.value = inpVal * USDNow;
  }, 0);
}

fromCurrency.addEventListener("keypress", getResult);
fromCurrency.addEventListener("keydown", getResult);
