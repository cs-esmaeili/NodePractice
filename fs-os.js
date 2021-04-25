// const http = require("http");


// const server = http.createServer((req, res) => {
//     console.log(req);
// });
// server.listen(3000);

// const data = require('./datatest');
// console.log(data);

// const fs = require('fs');
// fs.writeFile('test.txt', "haha this is node ", (e) => {
//     if (e) throw e;
//     console.log("file created");
// });

// console.log("salam 1");
// fs.appendFileSync('test.txt', "\nnext text", (e) => {
//     if (e) throw e;
//     console.log("file appended");
// });
// console.log("salam 2");

// fs.rename('test1.txt', 'test.txt', (e) => {
//     if (e) throw e;
//     console.log("file renamed");
// });

// const os = require('os');
// console.log(os.platform());
// console.log(os.arch());
// console.log(os.userInfo());
// console.log(os.release());
// console.log(os.hostname());
// console.log(os.uptime());


// const fs = require('fs');
// const persons = [{
//         id: 1,
//         fullname: "javad esmaeili"
//     },
//     { 
//         id: 2,
//         fullname: "ali esmaeili"
//     },
//     {
//         id: 3,
//         fullname: "akbar esmaeili"
//     },
// ];

// // fs.writeFile('contacts.json', JSON.stringify(persons), (e) => {
// //     if (e) throw e;
// //     console.log("file created");
// // });
// const data = fs.readFileSync('contacts.json');
// const p = data.toString();
// console.log(p);
// console.log(typeof p);
// console.log(JSON.parse(p));