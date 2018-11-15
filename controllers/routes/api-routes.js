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
        res.json("./download/" + req.params.path + ".zip")}, 
      err => console.log(err));
  });

  // app.get("/api/classes/:category", function (req, res) {
  //   db.Anim.findAll({
  //     where: {
  //       category: req.params.title
  //     }
  //   }).then(function (response) {
  //     console.log(response);
  //     res.json(response);
  //   });
  // });
};

// Add back in if posting functionality is desired
//   app.post("/api/anims", function (req, res) {
//     db.Anims.create(req.body).then(function (anims) {
//       res.json(anims);
//     });
//   });

//   app.post("/api/images", function () {
//     db.Images.create(req.body).then(function (images) {
//       res.json(images);
//     });
//   });
// };

/// EXAMPLES ///

  // app.get("/api/authors/:id", function(req, res) {
  //   // 2; Add a join to include all of the Author's Posts here
  //   db.Author.findOne({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbAuthor) {
  //     res.json(dbAuthor);
  //   });
  // });

  // app.delete("/api/authors/:id", function(req, res) {
  //   db.Author.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbAuthor) {
  //     res.json(dbAuthor);
  //   });
  // });