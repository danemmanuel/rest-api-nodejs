var Usuario = require('../models/usuarioModel'),
  jwt = require('jwt-simple'),
  moment = require('moment'),
  segredo = 'seusegredodetoken';
module.exports = (req, res) => {
  var username = req.body.username || '';
  var password = req.body.password || '';
  if (username == '' || password == '') {
    return res.send(401);
  }

  Usuario.findOne({ username: username }, function(err, user) {
    if (err) {
      return res.end(401);
    }

    user.verificaSenha(password, function(isMatch) {
      if (!isMatch) {
        return res.send('401');
      }

      var expires = moment()
        .add(7, 'days')
        .valueOf();
      var token = jwt.encode(
        {
          iss: user.id,
          exp: expires
        },
        segredo
      );

      return res.json({
        token: token,
        expires: expires,
        user: user.toJSON()
      });
    });
  });
};
