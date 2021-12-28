
const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/daily-meeting-angular'));
app.get('*', function(req,res) {
  res.sendFile(path.join(__dirname+
      '/dist/daily-meeting-angular/index.html'));});

app.all('*', (req, res) => {
  res.status(200).sendFile(__dirname + '/dist/daily-meeting-angular/index.html');
});
app.listen(process.env.PORT || 8080);

console.log ('je suis ici')
console.log(__dirname)
