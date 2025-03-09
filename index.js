let http = require('http');
let fs = require('fs');

let server = http.createServer((request, response) => {
  if (request.url == '/') {
    let home = fs.readFileSync('home.html');
    response.write(home);
    response.end();
  }
  else if (request.url == '/about') {
    let about = fs.readFileSync('about.html');
    response.write(about);
    response.end();
  } else if (request.url == '/contact') {
    let contact = fs.readFileSync('contact.html');
    response.write(contact);
    response.end();
  } else if (request.url == '/blogs') {
    let blogs = fs.readFileSync('blogs.html');
    response.write(blogs);
    response.end();
  } else {
  
    response.write('<h2>404 not found</h2>');
    response.end();
  }
});

server.listen(8080, (err) => {
  if (!err) {
    console.log('Server is running');
  } else {
    console.log('Error');
  }
});
