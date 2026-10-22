const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('DevOps Continuous Delivery Pipeline is Live!\n');
});

if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

function calculateSum(a, b) {
  return a + b;
}

module.exports = { server, calculateSum };