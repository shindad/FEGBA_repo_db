function addAnim(category, feClass, anName, dispName, URL, dlName, srcName) {
    sequelize.sync()
        .then(() => Anims.create({
            category: category,
            feClass: feClass,
            anName: anName,
            dispName: dispName,
            URL: URL,
            dlName: dlName,
            srcName: srcName
        }));
};

function addWep(weaponArr) {
    sequelize.sync()
        .then(() => Weapons.create({
            weaponsAvail: weaponArr
        }));
};

function addIm(still, gif) {
    sequelize.sync()
        .then(() => Images.create({
            still: still,
            gif: gif
        }));
};

