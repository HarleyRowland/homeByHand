var express = require('express');
var bodyParser = require('body-parser');
const app = express();

var userController = require('./controllers/userController.js')

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

app.get("/", (req, res) => userController.simplePage(req, res, "home.pug", callback))
app.get("/contact", (req, res) => userController.simplePage(req, res, "contact.pug", callback))
app.get("/about", (req, res) => userController.simplePage(req, res, "aboutUs.pug", callback))
app.get("/delivery", (req, res) => userController.simplePage(req, res, "delivery.pug", callback))
app.get("/returns", (req, res) => userController.simplePage(req, res, "returns.pug", callback))
app.get("/teescees", (req, res) => userController.simplePage(req, res, "teescees.pug", callback))
app.get("/privacy", (req, res) => userController.simplePage(req, res, "privacy.pug", callback))
app.get("/cookies", (req, res) => userController.simplePage(req, res, "cookies.pug", callback))

app.listen(app.get('port'), function() {
  console.info('Node app is running on port', app.get('port'));
});