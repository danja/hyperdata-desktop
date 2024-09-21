/*
var static = require('node-static');
var file = new static.Server(`${__dirname}/../`)

const log = require('electron-log');

log.info('Hello, log');
log.info(`${__dirname}`);

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        log.info('in listen');
        // log.info(request);
        //  log.info(request.url);
        file.serve(request, response)
    }).resume()
}).listen(8404)
// /home/danny/HKMS/hkms-desktop/src/hkms/http-server
// 
*/