var express = require('express');
var path = require('path');
var app = express();

// Route pour servir le fichier Snack5.html
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'Snack5.html'), function (err) {
        if (err) {
            console.log('Fichier non trouvé:', err);
            res.status(404).send('Fichier non trouvé');
        }
    });
});

app.listen(3001, function() {
    console.log('Serveur lancé sur le port 3001');
});
