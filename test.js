


var http = require("http"); 

// creating a web server using the http module 

var server = http.createServer(function(req, res)  {
    
    // display the received request in the console

    console.log("Request received:", req.url);

    // indicate that the response is HTML in utf-8

    res.setHeader("Counter-type", "text/html; charset=utf-8");

    // we always send the same response, regardless of the request received

    res.write("<h1>")

    res.write("Good morning all");

    res.write("</h1>");

    res.end();

});

// make the server listen on port 3000 (for example) 

    server.listen(3000);

    console.log("\nThe server was started on port 3000\n");
    console.log("You can make a request on:");
    console.log("http://localhost:3000");

        // The createServer() method returns an object
        // here used through the variable named server,
        // on which we indicate to wait for requests coming from 3000
        // (the one indicated in the server.listen(port) method).
        // This means that each time URLs of the form http://localhost:3000 are accessed via the browser,
        // the program previously launched 









    


