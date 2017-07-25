var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});


//Parametre URL
router.get('/:time', function(req,res){
  //res.send('index', { time: req.params.time });
  //    --> va retourner la page index en passant les parametres
  //Va retourner un objet JSON (Pratique pour les call API et BD)
  //var data = { time : req.params.time };
  //res.json(data);

  function unixToNatural(unix) {
    //on recoit ici des milisecondes
    var date = new Date(unix * 1000);
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//GetMonth retourne un nombre de 0 à 11
    var month = months[date.getMonth()];
    var day = date.getDate();
    var year = date.getFullYear();

    var result = month + ' ' + day + ' ' +  year;
    return result;
  }
    //Natural Data = format normal
  if(!isNaN(req.params.time)){
    var result = unixToNatural(req.params.time);
    var data = {unix: req.params.time, natural: result};
    res.json(data);
  } else{
    var natural = new Date(req.params.time);
//ajout de ligne pour faire un test
//second test
      if(!isNaN(natural)){
        var unix = natural / 1000;
        var data = {unis : unix, natural: req.params.time};
        res.json(data);
  } else{
    res.json({ unix: null, natural: null});
  }
}
});

module.exports = router;
