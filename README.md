# Nunki Saggitarius Windows npx express generator

## 01.01.2022

1. created new repository  nunki-saggitarius
1. copy/paste intructions below
  1. …or create a new repository on the command line
  1. echo "# nunki-saggitarius" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:wolfsonuser/nunki-saggitarius.git
git push -u origin main
1. copy/paste instructions below OR:
  1. …or push an existing repository from the command line
  1. git remote add origin git@github.com:wolfsonuser/nunki-saggitarius.git
  1. git branch -M main
  1. git push -u origin main


## December 30, 2021

1. Added onClick='takeMeHome()' on the inputForm post 
1. Added a script tag in inputForm == it did not work (indentation?)
1. Tried to add takeMeHome in the public/javascript/test.js but not
1. Tried to add takeMeHome in index.js not yet tested.
1. As of now: I adds each option and the bars behave as expected in /poll1 route
1. Added /poll4 route trying to fix the redirection behavior by adding the props passed to formInput.pug but not yet tested
1. Created new button to clear data and refresh the page but it is not working yet
1. "CLEAR" button tested and it is working without changing the post action in formInput.pug template.
1. PLAN: make CLEAR button active under two conditions, onclick and user IP address

## commit code name saggitarius

1. /poll4 route res.render('formInput'.....) with all props except 'result' which works only on get method (getIp()). Instead passed the last item of remoteIp array.
1. post on /poll4 correctly render the form, no need redirect
1. /clear: res.send h1 "NOT AUTHORIZED" with a tags to home page ('/')
1. /clear authorized from 155 only, make sure to add AWS address. 
1. BUG: to clear it needs to be clicked twice. 
1. Try tag on saggitarius

## Tag code v1.0.0


## 12.17.2021

## Audit fix --force because of pug version. Also issues with core-js < 3.3 

### NOTES

1. Worked on some examples from expressjs.com/en/starter/generator
1. cookies, mvc, online (tracking online user activity with online and redis packages), params
1. finally found a good examples at https://stackoverflow.com/questions/27234861/correct-way-of-getting-clients-ip-addresses-from-http-request
1. tried RemoteAddr but it did not work. 
1. Searched packages similar to matplotlib, but some use plotly which is open but with price
1. X-forward-for
1. PENDING: use simple div as bars.

## December 20, 2021

1. bars.html file with two scripts: infile and outfile;
1. Big green  button
1. Big red bars
1. Unlimited selections
1. five CSS class with different heights
1. Question content coming from questions-content.js file
1. Only for static display, meaning click events must be posted and final figure refreshed when students vote only one time (the firt time).

## 12.21.2021

1. OBSERVATIONS: 
  1. route /users post and get. Render pug templates. 
  1. script in pug template read as src source, output in chrome console.
  1. Button onclick(this) shows the full input tag <input type value onclick='myFunc()'>
  1. when /users is refreshed, server console shows only get 
  1. when using postman to post, it show in server console as
  1. [Object: null prototype] { name: 'january' }
  1. When /users post method used and send response as string result 200
  1. when using render list.pug page resuls is 500
1. PROBLEMS:
  1. unable to post from the form
  1. post only using postman
  1. run script as get? or run script in server?
  1. Check the movie database to see how it deals with post request: fetch?
  1. is it fetch from within server? I think not, but.....
  1. Post request from client side and from pug - server side.

## December 25, 2021

### Get, Post working with global online, remoteIP
1. online: name, anyothervariable in post route inside req.body
1. remoteIP: collects the client's IP add
1. res.redirect syntax now is (200, url), and req.body goes into datastructure whatever
1. Now that the flow is verified, post has been tested from postman, curl, and form, pending to change the options from buttons to div maybe, or find a way to record the button selection to be sent with the req.body. The button submit from the form is now, refresh-the-page since it uses get method. 
1. add a post button? 
1. Clean pug templates.
1. Work on the logic to accept only one submission but keep counting the number of times that client clicks on refresh.
  bars.pug
bars.pug.bak.txt
error.pug
formInput.pug
index.pug
layout.pug
list.pug
radio.1.bak
radio.pug
register.pug

## December 27, 2021

1. Added radio.pug with radio button example class my-radio name= my-selection in radio.pug as well as list.pug
1. It was not working in original example as radio.1.bak because it had a nested element, I believe the input type submit, when submitting the form with action post it automatically recognize the value of my-selection 
1. register is from an example and it did not work because of indentation problems after copying pasting.
1. Currently the /users/simple route renders list.pug template with fakeDb data, search box, add items box, input boxes with required, input boxes with no required, and now radio buttons active.

## December 28,2021

1. Finished with /users route: /users : renders formInput.pug
1. /users/radio renders radio.pug
1. /users/simple get render list.pug
1. /users/simple post renders a message, it is not redirect
1. /users post redirect to (200, 'formInput');
1. Then started with root route '/' which corresponds to index.js
1. OBS: 
  1. '/' counts number of request independent of '/users'
  1. '/' get renders formInput.pug
  1. '/listip' get route works correctly
  1. '/list' get route is not working
  1. '/' post route is not existent yet
  1. when post submit hit: alert posting  is OK then redirect to '/formInput' route not found because it does not exist.
  1. in formInput.pug file the refresh button was linked to '/users' route, so by clicking it always redirected from '/' to '/users'
  1. Changed the refresh button action to '/', possibly it will break access to this page from another route.
  1. Pending to modify post action to '/' from '/users', which would break also other routes. Pending to analyze, and to make a commit with name: 
  1. CANDIDATE to add different routes for different pollings
1. Commit is "Candidates for different polling routes instead of killing the server every time a poll is carried out.
1. in '/users' post route redirected to '/' which is routes/index.js
1. It worked perfectly!
1. Now change to '/simple' which means '/users/simple' get action
1. When using the Router (uppercase R), redirection need full URL, not just the end of the route used by the Router: example, from Router user.js '/' (which really means '/users') redirect not to '/simple', but to full url even inside the users.js file: '/users/simple'.

## December 29, 2021

1. JS Map() key:value ==> myMap
  1. myMap.set('A', 1)
  1. myMap.get('A')
  1. myMap.keys()
  1. myMap.values()
  1. myMap.entries() it is an iterator
1. JS Set() 
  1. Unique elements, it does not allow duplicates.
  1. new Set() 
  1. let mySet = new Set(["","","","",""])
  1. mySet.add(value)
  1. mySet.delete(value)
  1. mySet.clear()


## December 30, 2021

1. Added onClick='takeMeHome()' on the inputForm post 
1. Added a script tag in inputForm == it did not work (indentation?)
1. Tried to add takeMeHome in the public/javascript/test.js but not
1. Tried to add takeMeHome in index.js not yet tested.
1. As of now: I adds each option and the bars behave as expected in /poll1 route
1. Added /poll4 route trying to fix the redirection behavior by adding the props passed to formInput.pug but not yet tested
1. Created new button to clear data and refresh the page but it is not working yet
1. "CLEAR" button tested and it is working without changing the post action in formInput.pug template.
1. PLAN: make CLEAR button active under two conditions, onclick and user IP address

## commit code name saggitarius

1. /poll4 route res.render('formInput'.....) with all props except 'result' which works only on get method (getIp()). Instead passed the last item of remoteIp array.
1. post on /poll4 correctly render the form, no need redirect
1. /clear: res.send h1 "NOT AUTHORIZED" with a tags to home page ('/')
1. /clear authorized from 155 only, make sure to add AWS address. 
1. BUG: to clear it needs to be clicked twice. 
1. Try tag on saggitarius

## Tag code v1.0.0



