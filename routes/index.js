var express = require('express');
var router = express.Router();

let online = ['January'];
let remoteIP = ['2.2.2.2'];
let fakeDb = ["Nelson"];

// display fakeDb
function displayFakeDb (fakeDb) {
  fakeDb.forEach(element => {
    //console.log(element)
    return element;
  });
}

router.get('/', function(req, res, next) {
  // fire-and-forget
  online.push(req.headers['user-agent']);
  let result = getIp(req);
  remoteIP.push(result);
  console.log(`online length ${online.length} `)
  res.render('formInput', {title: 'Select Option A,B,C or D', item: listItems(remoteIP),
                online: online})
})

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
  //res.render('list', { title: 'your IP address is: ', item: listItems(remoteIP) });
  let index = searchTerm(req.query); console.log(index + " --########")
  res.render('list', { fakeDb: (fakeDb), index:index})
})

module.exports = router;
