var db = require("../../models");
const fs = require('fs');
var archiver = require('archiver');

// Zips the directory and all subdirectories together.
function zipDirectory(source, out) {
  const archive = archiver('zip', { zlib: { level: 9 } });
  const stream = fs.createWriteStream(out);

  return new Promise((resolve, reject) => {
    archive
      .directory(source, false)
      .on('error', err => {
        console.log(err);
        reject(err)
      })
      .pipe(stream);

    stream.on('close', () => {
      console.log("success ", archive.pointer());
      resolve(out)
    });
    archive.finalize();
  });
};

module.exports = function (app) {
  app.get("/api/anims/:class", function (req, res, next) {
    console.log(req.params);
    // Search for all anims of the class selected
    db.Anim.findAll({
      where: {
        feClass: req.params.class
      },
      //include all weapons through the linking table
      //along with attributes still and gif from the linking table
      include: [{
        model: db.Weapon,
        through: {
          attributes: ['weapon']
        }
      }]
    }).then(function (response) {
      console.log(response);
      res.json(response);
    });
  });

  app.get("/api/unit/:path", function (req, res, next) {
    let promise = zipDirectory("./public/" + req.query.path, "./public/download/" + req.params.path + ".zip");
    promise.then(
      out => {
        res.json("./download/" + req.params.path + ".zip")
      },
      err => console.log(err));
  });
  app.get("/api/search/", function (req, res, next) {
    Object.keys(req.query).forEach((key) => (req.query[key] == '' || req.query[key] == 'T') && delete req.query[key]);
    //console.log(req.query)

    db.Anim.findAll({
      where: req.query,
      //include all weapons through the linking table
      //along with attributes still and gif from the linking table
      include: [{
        model: db.Weapon,
        through: {
          attributes: ['weapon']
        }
      }]
    }).then(function (response) {
      //console.log(response);
      res.json(response);
    });
  });
};

/// END ROUTES ///