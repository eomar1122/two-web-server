// Using the previous example as a guide, create an app that has two web servers.
// One that listens on port 7000 and one that listens on port 7500.
// The one listening on port 7000 will always tell the user something good about themselves.
// The one listening on 7500 will always tell the user something bad about themselves.
// Make sure you create a Github repo and commit this code!


// require the HTTP module
const http = require("http");

// here we define the port to listen on
const PORT1 = 7000;
const PORT2 = 7500;

// create a generic function to handle requests and response
function handleRequest1(request, response) {
    // the below statement is triggered (client-side) when the user visits the PORT url
    response.end("You are a JavaScript master mind!");
}

// create a generic function to handle requests and response
function handleRequest2(request, response) {
    // the below statement is triggered (client-side) when the user visits the PORT url
    response.end("JavaScript must not be your forte!");
}

// here we use the Node http package to create our server
// we then pass it the handleRequest function to empower it with functionality
const server = http.createServer(handleRequest1);
const server2 = http.createServer(handleRequest2);

// start the server so that it can begin listening to client requests
server.listen(PORT1, function() {
    //trigger the statement (server-side) when the user visits the PORT url
    console.log("Server listening on: http://localhost:" + PORT1);
});

// start the server so that it can begin listening to client requests
server2.listen(PORT2, function() {
    //trigger the statement (server-side) when the user visits the PORT url
    console.log("Server listening on: http://localhost:" + PORT2);
});

