var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

let online = [];
let remoteIP = [];


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
  return '<ol>' + ids.map(function (id) {
    return '<li>' + id + '</li>';
  }).join('') + '</ol>';
}

function listItems(ids) {
  return ids.map(function (id) {
    return  id;
  })
} 
/**
 * GET users online.
 */

router.get('/listip', function (req, res) {
  // fire-and-forget
  online.push(req.headers['user-agent']);
  let result = getIp(req);
  remoteIP.push(result);
  console.log(`online length ${online.length} `)
  res.send(`</p>Requests online: ${online.length} </p> ${list(remoteIP)}`);
});

router.get('/list', function (req, res) {
  // fire-and-forget
  online.push(req.headers['user-agent']);
  let result = getIp(req);
  remoteIP.push(result);
  console.log(`online length ${online.length} `)
  res.render('list', { title: 'your IP address is: ', item: listItems(remoteIP) });
})

module.exports = router;
