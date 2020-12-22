const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/../dist/pop-frontend'));

app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+'/../dist/pop-frontend/index.html'));
});

const port = 80;
app.listen(port, () => console.log(`Front is being served on port ${port}`));
