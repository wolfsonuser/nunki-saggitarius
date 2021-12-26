var express = require('express');
var router = express.Router();

let online = ['online'];
let remoteIP = ['2.2.2.2'];
let fakeDb = ["Nelson"];

// display fakeDb
function displayFakeDb (fakeDb) {
 fakeDb.forEach(element => {
   console.log(element)
   return element;
 });
}

/* GET users listing. */
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
function listItems(ids) {
  return ids.map(function (id) {
    return  id;
  })
} 
router.post('/', function(req, res){
  console.log('inside post route')
  online.push(req.body.name)
  online.push(req.body.a)
  res.redirect(200, 'formInput');
});

router.get('/simple', function (req, res) {
  res.render('list', { fakeDb: (fakeDb)})
})
router.post('/simple', function(req, res) {
  console.log(req.body);
  fakeDb.push(req.body.textInput);
  console.log("adding... added: " + req.body.textInput)
  fakeDb.push(req.body.name);
  fakeDb.push(req.body.email);
  res.send("/users/simple/ post route was hit!!!");
})

module.exports = router;
