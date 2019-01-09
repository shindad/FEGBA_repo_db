/// DEPENDENCIES ///

const db = require("../../models");
const fs = require('fs');
const archiver = require('archiver');

/// END DEPENDENCIES ///

/// ROUTES ///

module.exports = function (app) {

  // Gathers animations based on the selected class category
  app.get("/api/anims/:class", function (req, res, next) {
    //console.log(req.params);
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
      // console.log(response);
      res.json(response);
    });
  });

  // Search API route takes search term as an object and searches the database using term info
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

  // Download path zips the item selected and outputs it
  app.get("/api/unit/:path", function (req, res, next) {
    const out = "./public/download/" + req.params.path + ".zip";
    const archive = archiver('zip', { zlib: { level: 9 } });
    const stream = fs.createWriteStream(out);

    const source = "./public/" + req.query.path;

    let promise = new Promise(function (resolve, reject) {
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
    promise.then(
      out => {
        res.json("./download/" + req.params.path + ".zip")
      },
      err => console.log(err));
  });
};

/// END ROUTES ///