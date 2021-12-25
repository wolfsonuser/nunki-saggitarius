var express = require('express');
var router = express.Router();

let online = ['1.1.1.1'];
let remoteIP = ['2.2.2.2'];

/* GET users listing. */
router.get('/', function(req, res, next) {
  // fire-and-forget
  online.push(req.headers['user-agent']);
  let result = getIp(req);
  remoteIP.push(result);
  console.log(`online length ${online.length} `)
  //res.render('list', { title: 'your IP address is: ', item: listItems(remoteIP) });
  res.render('formInput', {title: 'Select Option A,B,C or D', item: listItems(remoteIP)})
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
function listItems(ids) {
  return ids.map(function (id) {
    return  id;
  })
} 
router.post('/', function(req, res){
  console.log('inside post route')
  console.log(req.body.name);
  //console.log(req.navigator);
  //res.send("post route was hit!!");
  res.render('list', {title: 'Number of connects ', item: listItems(remoteIP)}) 
});

module.exports = router;
