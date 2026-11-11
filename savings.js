function calculateAnnualSavings(currentPrice, newPrice, annualVolume) {
    return (currentPrice - newPrice) * annualVolume;
  }
  
  const annualSavings = calculateAnnualSavings(4.80, 4.50, 20_000);
  console.log(`Annual savings: €${annualSavings.toFixed(2)}`);