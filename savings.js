function calculateAnnualSavings(currentPrice, newPrice, annualVolume) {
  return (currentPrice - newPrice) * annualVolume;
}

const USAGE = "Usage: node savings.js <current-price> <new-price> <annual-volume>";

function parsePrice(raw) {
  if (typeof raw !== "string" || raw.trim() === "") return null;
  const value = Number(raw);
  if (!Number.isFinite(value) || value < 0) return null;
  return value;
}

function parseVolume(raw) {
  if (typeof raw !== "string" || raw.trim() === "") return null;
  const value = Number(raw);
  if (!Number.isInteger(value) || value <= 0) return null;
  return value;
}

const currentPrice = parsePrice(process.argv[2]);
const newPrice = parsePrice(process.argv[3]);
const annualVolume = parseVolume(process.argv[4]);

if (currentPrice === null || newPrice === null || annualVolume === null) {
  console.log(USAGE);
  process.exit(1);
}

const currentAnnualCost = currentPrice * annualVolume;
const newAnnualCost = newPrice * annualVolume;
const annualSavings = calculateAnnualSavings(currentPrice, newPrice, annualVolume);

console.log(`Current annual cost: €${currentAnnualCost.toFixed(2)}`);
console.log(`New annual cost: €${newAnnualCost.toFixed(2)}`);
console.log(`Annual savings: €${annualSavings.toFixed(2)}`);
