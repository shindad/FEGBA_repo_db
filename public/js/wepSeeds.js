var db = require("../../models");

function addWep(wepName) {
    db.Weapon.create({
        name: wepName
    });
    // db.Anim.belongsToMany(db.Weapon, { through: db.AnimWepIm });
    db.Weapon.belongsToMany(db.Anim, { through: db.AnimWepIm });
};

//INSERT INTO weapons (weaponsAvail) VALUES ('["sword"]');
addWep("sword");
addWep("lance");
addWep("axe");
addWep("bow");
addWep("fire");
addWep("dark");
addWep("light");
addWep("staff");