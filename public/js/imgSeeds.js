var db = require("../../models");

//var path = "https://github.com/shindad/FEGBA_Anim/blob/master/feugit/assets/images/";

function imgCreate(still, gif) {
    db.Images.create({
        still: still,
        gif: gif
    });
};

// INSERT INTO images (still, gif) VALUES (
// 	"https://github.com/shindad/FEGBA_Anim/blob/master/feugit/assets/images/swords/assassin/f_gt.gif", "https://github.com/shindad/FEGBA_Anim/blob/master/feugit/assets/images/swords/assassin/f_gt.png"
// );

//imgCreate(path + "swords/assassin/f_gt.gif", path + "swords/assassin/f_gt.png")

