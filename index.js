const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    //url, method, headers
    // const url = req.url;
    // const method = req.method;
    // const header = req.headers;
    const { url, method } = req;
    // console.log(`Url: ${url} \n Method: ${method} \n Headers: ${headers}`);
    res.setHeader("Content-Type", "text/html");

    if (url === "/hello") {
        res.write("<html>");
        res.write("<head><title>Hello World</title></head>");
        res.write("<body><center><h1>Hello World</h1><center></body>");
        res.write("</html>");
        return res.end();
    } else if (url === "/") {
        res.write("<html>");
        res.write("<head><title>Hello World</title></head>");
        res.write("<body><center>");
        res.write("<h1>Home Page</h1>");
        res.write("<form action='/message' method='POST'>");
        res.write("<input type='text' name='message'/>");
        res.write("<input type='submit'/>");
        res.write("</form>");
        res.write("</center></body>");
        res.write("</html>");
        return res.end();
    } else if (url === "/message" && method === "POST") {
        const body = [];

        req.on("data", (chunk) => {
            body.push(chunk);
            // console.log(body);
        });

        req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            // console.log(parsedBody);
            const message = parsedBody.split("=")[1];
            fs.writeFileSync("message.txt", message);
        });

        // res.statusCode = 302;
        // res.setHeader("Location", "/");
        res.writeHead(302, { Location: "/" });
        return res.end();
    } else {
        res.write("<html>");
        res.write("<head><title>Hello World</title></head>");
        res.write("<body><center><h1>Not Found!</h1><center></body>");
        res.write("</html>");
        return res.end();
    }
});

server.listen(3000);
