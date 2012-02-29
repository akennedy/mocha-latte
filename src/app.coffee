require 'coffee-script'
coffeecup = require 'coffeecup'

flatiron = require 'flatiron'
app = flatiron.app
app.use flatiron.plugins.http
app.router.get '/', ->
  @res.writeHead 200, 'Content-Type': 'text/html'
  @res.end coffeecup.render ->
    doctype 5
    html ->
      head ->
        title 'Mocha Latte is Smooth'

      body style: "height:600px;background:url('http://papercraftingwithlupus.files.wordpress.com/2008/09/pumpkin_latte_nutrition.jpg') no-repeat center center", ->
        div style: "padding-top:100px;", ->
          center ->
            h1 'Mocha Latte'

app.start 3000
