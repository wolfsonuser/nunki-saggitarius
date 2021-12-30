var express = require('express');
var router = express.Router();

let online = ['January'];
let remoteIp = ['2.2.2.2'];
let fakeDb = ["Nelson"];
let fakeSet = new Set();
let selection = [];
let fakeSelArray = [];
let mapSelection = new Map();

mapSelection.set('A', 0);
mapSelection.set('B', 0);
mapSelection.set('C', 0);
mapSelection.set('D', 0);

// display fakeDb
function displayFakeDb(fakeDb) {
  fakeDb.forEach(element => {
    //console.log(element)
    return element;
  });
}

function clearFakeData() {
  fakeDb = ['Nelson'];
  fakeSet = new Set();
  selection = [];
  fakeSelArray = [];
  mapSelection.set('A', 0);
  mapSelection.set('B', 0);
  mapSelection.set('C', 0);
  mapSelection.set('D', 0);
}

router.get('/', function (req, res, next) {
  // fire-and-forget
  online.push(req.headers['user-agent']);
  let result = getIp(req);
  remoteIp.push(result);
  console.log(`online length ${online.length} `)
  res.render('formInput', {
    title: 'Select Option A,B,C or D', item: listItems(remoteIp),
    online: online, lastRequest: result, selection: selection, fakeSelArray,
    mapSelection
  })
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
    return id;
  })
}
/**
 * GET users online.
 */

router.get('/listip', function (req, res) {
  // fire-and-forget
  online.push(req.headers['user-agent']);
  let result = getIp(req);
  remoteIp.push(result);
  console.log(`online length ${online.length} `)
  res.send(`</p>Requests online: ${online.length} </p> ${list(remoteIp)}`);
});

router.get('/list', function (req, res) {
  // fire-and-forget
  online.push(req.headers['user-agent']);
  let result = getIp(req);
  remoteIp.push(result);
  console.log(`online length ${online.length} `)
  //res.render('list', { title: 'your IP address is: ', item: listItems(remoteIp) });
  let index = searchTerm(req.query); console.log(index + " --########")
  res.render('list', { fakeDb: (fakeDb), index: index })
})

router.post('/poll1', function (req, res) {
  //res.send('hit poll1 using post');
  console.log('poll1: ' + req.body.my_selection);
  selection.push(req.body.my_selection);
  //let mapSelection = new Map();

  mapSelection.set(req.body.my_selection, (mapSelection.get(req.body.my_selection) + 1));
  // for (const [key, value] of mapSelection){
  //   console.log(key + ":" + value);
  // }
  console.log(mapSelection.entries());

  for (let i = 0; i < online.length; i++) {
    fakeSet.add(remoteIp[i]);
  }
  fakeSelArray = [9, 2, 0, 4];

  console.log(`poll 1  option: ${req.body.my_selection}  last request: ${remoteIp[remoteIp.length - 1]} ${selection}   `);

  //res.send('hit poll3 using post');
  res.redirect(200, '/');
})

router.post('/poll2', function (req, res) {
  //res.send('hit poll2 using post');
  console.log('poll2: ' + req.body.my_selection);

  for (let i = 0; i < online.length; i++) {
    fakeSet.add(remoteIp[i]);
  }
  console.log(fakeSet);
  console.log(mapSelection.entries());

  //res.send('hit poll3 using post');
  res.redirect(200, '/');
})

router.post('/poll3', function (req, res) {
  console.log("poll3: " + req.body.my_selection);
  for (let i = 0; i < online.length; i++) {
    fakeSet.add(remoteIp[i]);
  }
  console.log(fakeSet);

})

router.post('/clear', function (req, res) {
  console.log('========== route/index.js line 147');
  console.log(remoteIp[remoteIp.length - 1]);
  if (remoteIp[remoteIp.length - 1]  === '::ffff:10.0.0.155'){
    console.log(` fakeDb = ['Nelson'];
    fakeSet = new Set();
    selection = [];
    fakeSelArray = [];
    mapSelection.set('A', 0);
    mapSelection.set('B', 0);
    mapSelection.set('C', 0);
    mapSelection.set('D', 0);`)
    clearFakeData();
  } else {
    console.log("Not authorized to clear data....")
  }
  //res.redirect(200, '/');
  res.send("<h1 id='not-auth'><a href='/'>NOT AUTHORIZED TO CLEAR DATA!!!!</a></h1>")
})
router.post('/poll4', function (req, res, next) {
  
  console.log('==== 166 poll4: ' + req.body.my_selection);
  selection.push(req.body.my_selection);
  //let mapSelection = new Map();

  mapSelection.set(req.body.my_selection, (mapSelection.get(req.body.my_selection) + 1));
  // for (const [key, value] of mapSelection){
  //   console.log(key + ":" + value);
  // }
  console.log(mapSelection.entries());

  for (let i = 0; i < online.length; i++) {
    fakeSet.add(remoteIp[i]);
  }
  fakeSelArray = [9, 2, 0, 4];

  console.log(`=== 181 poll 1  option: ${req.body.my_selection}  last request: ${remoteIp[remoteIp.length - 1]} ${selection}   `);

  // fire-and-forget
  res.render('formInput', {
    title: 'Select Option A,B,C or D', item: listItems(remoteIp),
    online: online, lastRequest: remoteIp[remoteIp.length-1], selection: selection, fakeSelArray,
    mapSelection
  })
})

module.exports = router;
