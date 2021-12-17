/**
 * Module dependencies.
 */

 var express = require('express');

let online = [];
let remoteIP = [];
 
 // app
 
 var app = express();
 
 // activity tracking, in this case using
 // the UA string, you would use req.user.id etc
 
 app.use(function(req, res, next){
   // fire-and-forget
   online.push(req.headers['user-agent']);
   let result = getIp(req);
   remoteIP.push(result);
   next();
 });
 
 /*
 *found in https://stackoverflow.com/questions/27234861/correct-way-of-getting-clients-ip-addresses-from-http-request
*/

function getIp(request) {
    const { headers, connection, socket } = request
    const connectionSocket = connection && connection.socket
  
    return (
      (headers && headers['x-original-forwarded-for']) ||
      (connection && connection.remoteAddress) ||
      (socket && socket.remoteAddress) ||
      (connectionSocket && connectionSocket.remoteAddress) ||
      null
    )
  }
 /**
  * List helper.
  */
 
 function list(ids) {
   return '<ul>' + ids.map(function(id){
     return '<li>' + id + '</li>';
   }).join('') + '</ul>';
 }
 
 /**
  * GET users online.
  */
 
 app.get('/', function(req, res, next){
    console.log(`online length ${online.length} `)
    res.send(`</p>Requests online: ${online.length} </p> ${list(remoteIP)}`);
 });
 
 /* istanbul ignore next */
 if (!module.parent) {
   app.listen(3000);
   console.log('Express started on port 3000');
 }