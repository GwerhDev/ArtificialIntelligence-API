
require('dotenv').config();
const server = require('./app');
const { port } = require('./config');

async function main() {
  try {
    server.listen(port, () => console.log(`server listening on port ${port}`))
  } catch (error) {
    console.error("Unable to connect to database");
  }
}
main();