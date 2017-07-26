var express = require('express');

// Create app

var app = express();
const PORT = process.env.PORT || 3000;

// app.use(function(req, res, next){
//     if (req.headers['x-forwarded-proto'] === 'http') {
//         next();
//     } else {
//         res.redirect('http://' + req.hostname + req.url);
//     }
// })

app.use(express.static('public'));

// Listen on port , which depends on the environment

app.listen(PORT, function (){
    console.log('Server is running on port ' + PORT);
});