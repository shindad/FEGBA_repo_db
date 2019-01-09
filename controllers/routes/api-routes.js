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
    const source = "./public/" + req.query.path;
    const archive = archiver('zip', { zlib: { level: 9 } });
    var stream = fs.createWriteStream(out)

    const promise = new Promise(function (resolve, reject) {
      console.log("Before Stream")

      console.log("Before Archive")
      archive
        .directory(source, false)
        .on('error', err => {
          console.log(err);
          reject(err)
        })
        .on('warning', function (err) {
          if (err.code === 'ENOENT') {
            // log warning
          } else {
            // throw error
            throw err;
          }
        })
        .pipe(stream)

      stream.on('close', () => {
        console.log("success ", archive.pointer());
        resolve()
      });

      console.log("finalize");
      console.log(source);
      archive.finalize();

    });
    promise.then(
      out => {
        console.log("promise complete");
        res.json("./download/" + req.params.path + ".zip")
      },
      error => console.log(error));
  });
};

/// END ROUTES ///