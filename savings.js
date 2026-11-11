function calculateAnnualSavings(currentPrice, newPrice, annualVolume) {
  return (currentPrice - newPrice) * annualVolume;
}

const currentPrice = 4.80;
const newPrice = 4.50;
const annualVolume = 20_000;

const currentAnnualCost = currentPrice * annualVolume;
const newAnnualCost = newPrice * annualVolume;
const annualSavings = calculateAnnualSavings(currentPrice, newPrice, annualVolume);

console.log(`Current annual cost: €${currentAnnualCost.toFixed(2)}`);
console.log(`New annual cost: €${newAnnualCost.toFixed(2)}`);
console.log(`Annual savings: €${annualSavings.toFixed(2)}`);
