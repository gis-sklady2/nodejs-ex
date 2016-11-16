var express = require('express');
var http = require('http');

var app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));

app.set('port', process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080);
app.set('ip', process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0');
  /*
app.set('port', 3000);
app.set('ip','localhost'); 
*/


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});


app.get("/", function(req,res){
  if(err){
    res.send(err)
  }
  else{
   res.render('index')
  }
})