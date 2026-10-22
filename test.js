const { calculateSum } = require('./app');

console.log("=== EXECUTING AUTOMATED UNIT TESTS ===");

const result = calculateSum(15, 25);
if (result === 40) {
  console.log("TEST PASSED: 15 + 25 = 40");
  process.exit(0);
} else {
  console.error("TEST FAILED: Expected 40, got " + result);
  process.exit(1);
}