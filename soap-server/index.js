const myService = {
    SoapWebService:{
        SoapWebService_0: {
            HelloWorld: function (args) {
                return {
                    name: args.name
                };
            },
        }
    }
};


const xml = require('fs').readFileSync('myservice.wsdl', 'utf8');

//http server example
const server = require('http').createServer(function(request,response) {
    response.end('404: Not Found: ' + request.url);
});

server.listen(8000);
require('soap').listen(server, '/wsdl', myService, xml, function(){
  console.log('server initialized');
});