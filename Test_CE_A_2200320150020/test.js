const currencyconverter = () => {
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then((res) => res.json())
      .then((data) => {
        display(data);
        const convertedAmount = (amount * rate).toFixed(2);
        document.getElementById("convert").value = convertedAmount;
      })
      .catch((error) => console.error("Error fetching data:", error));
  };
  
  
