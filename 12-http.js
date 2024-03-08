const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  } else if (req.url === "/about") {
    res.end("Here is our brief description");
  } else {
    res.end(`
    <h1>Oops</h1>
    <p>We can't seem to find the page you arte looking for!</p>
    <a href='/'>Back to the Home Page</a>
    `);
  }
});

server.listen(5000);
