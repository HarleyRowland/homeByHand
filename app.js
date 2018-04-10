var express = require('express');
var bodyParser = require('body-parser');
const app = express();

var recipeController = require('./controllers/recipeController.js')

app.set("view engine", "pug");
app.set('port', (process.env.PORT || 5000));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  next();
});
app.use("/public", express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var callback = function(error, res, template, data){
  if(error){
    return console.error(error);
  }
  res.render(template, {data: data});
}

app.get("/", (req, res) => recipeController.getRecipe(req, res, "home.pug", callback))

app.listen(app.get('port'), function() {
  console.info('Node app is running on port', app.get('port'));
});