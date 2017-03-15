var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request, response){
    console.log('client request URL:', request.url);

    if(request.url === '/cars'){
        fs.readFile('views/cars.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/cats'){
        fs.readFile('views/cats.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/cars/new'){
        fs.readFile('views/carform.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end()
        });
    }
    // else if(request.url === '/images/fairlady.jpg'){
    //     fs.readFile('./images/fairlady.jpg', function(errors, contents){
    //         response.writeHead(200, {'Content-Type': 'image/jpg'});
    //         response.write(contents);
    //         response.end();
    //     });
    // }
    else if(request.url === '/images/ferarri.jpg'){
        fs.readFile('./images/ferarri.jpg', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/mustang.jpg'){
        fs.readFile('./images/mustang.jpg', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/burrito.jpg'){
        fs.readFile('./images/burrito.jpg', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/pancake.jpg'){
        fs.readFile('./images/pancake.jpg', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/nick.jpg'){
        fs.readFile('./images/nick.jpg', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/stylesheets/style.css'){
        fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/css'});
            response.write(contents);
            response.end();
        });
    }
    else{
        response.writeHead(404);
        response.end('File Not Found!!!');
    }
});

server.listen(7077);
console.log("Running in localhost at post 7077");
