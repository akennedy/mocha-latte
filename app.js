var app, coffeecup, flatiron;

require('coffee-script');

coffeecup = require('coffeecup');

flatiron = require('flatiron');

app = flatiron.app;

app.use(flatiron.plugins.http);

app.router.get('/', function() {
  this.res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  return this.res.end(coffeecup.render(function() {
    doctype(5);
    return html(function() {
      head(function() {
        return title('Mocha Latte is Smooth');
      });
      return body({
        style: "height:600px;background:url('http://papercraftingwithlupus.files.wordpress.com/2008/09/pumpkin_latte_nutrition.jpg') no-repeat center center"
      }, function() {
        return div({
          style: "padding-top:100px;"
        }, function() {
          return center(function() {
            return h1('Mocha Latte');
          });
        });
      });
    });
  }));
});

app.start(3000);
