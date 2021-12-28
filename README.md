# Nunki Saggitarius Windows npx express generator

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


