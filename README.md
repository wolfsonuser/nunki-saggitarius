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
  