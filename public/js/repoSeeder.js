/// DEPENDENCIES ///

const fs = require('fs');
const db = require("../../models");

/// END DEPENDENCIES ///

/// CONSTRUCTORS ///

// Contains all anim information that will later be given to the sql server.
function Anim(tier, category, feClass, name, gender, credit, download, dlName, weapons) {
    this.tier = tier;
    this.category = category;
    this.feClass = feClass;
    this.name = name;
    this.gender = gender;
    this.credit = credit;
    this.download = download;
    this.dlName = dlName;
    this.weapons = weapons;
};

/// END CONSTRUCTORS ///

/// GLOBAL VARIABLES ///

// Sets the default route that all animations use from root
const images = './public/img/';

// Stores all of the results of fs image grabs. Will be changed later to non-global
const tempArray = [];

/// END GLOBAL VARIABLES ///

/// FUNCTIONS ///

// Takes an element from the array of completed 
const masterSeeder = tempanim => {
    db.Anim.findOrCreate({ //utilizes findorCreate so that the search will always proceed to the next level. This ensures that if new animations are added to existing units, they are checked
        where: {
            tier: tempanim.tier,
            category: tempanim.category,
            feClass: tempanim.feClass,
            gender: tempanim.gender,
            name: tempanim.name,
            URL: tempanim.download,
            dlName: tempanim.dlName,
            credit: tempanim.credit,
        }
    }).then(function (anim) {
        tempanim.weapons.forEach(weapon => {
            db.Weapon.create({ //Utilizes create. Any already-existing weapon will be cause an err.
                still: weapon.still,
                gif: weapon.gif,
            }).then(function (sqlWeapon) {
                anim[0].addWeapon(sqlWeapon, {
                    through: {
                        name: tempanim.feClass,
                        weapon: weapon.type
                    }
                }).then(function () {
                    console.log("Success: " + tempanim.feClass + " " + tempanim.name + " - " + weapon.fullName + " has been inserted.");
                }).catch(err => {
                    console.log("Failed: Merge Table: " + tempanim.feClass + " " + tempanim.name + " - " + weapon.fullName + ". Err Code: " + err);
                });
            }).catch(err => {
                console.log("Failed: Weapon Search: " + tempanim.feClass + " " + tempanim.name + " - " + weapon.fullName + ". Err code: " + err);
            });
        });
    }).catch(err => {
        console.log("Failed: Animation: " + tempanim.name + ". Err code: " + err);
    });
};

// Function to be called at the completion of findAnims. Handles completed array.
const completeArray = () => {
    tempArray.forEach(unit => {
        masterSeeder(unit);
    });
    //masterSeeder(tempArray[0]);
};

// Searches the filesystem to grab the relevant details for each unit within each category.
const findAnims = () => {
    fs.readdir(images, (err, categories) => {
        if (err) {
            console.log(err);
        } else {
            let catCounter = 0;
            const catCeiling = 1;
            categories.forEach(category => {
                // temporary limiter. To be expanded / removed w/ further testing
                if (category === 'Lords') {
                    fs.readdir(images + category + "/", (err, units) => {
                        console.log("units to count: " + units.length);
                        let unitCounter = 0;
                        units.forEach(unit => {
                            const tempInfoArray = unit.match(/[^[\[\{\(\]\}\)]+/g)
                            let anim = new Anim(tempInfoArray[0], tempInfoArray[1], tempInfoArray[2], tempInfoArray[3], tempInfoArray[4], tempInfoArray[5], 'img/' + category + "/" + unit, unit, []);

                            if (tempInfoArray.length === 5) {
                                anim.name = "";
                                anim.gender = tempInfoArray[3];
                                anim.credit = tempInfoArray[4];
                                anim.download = 'img/' + category + "/" + unit;
                            };
                            fs.readdir(images + category + "/" + unit + "/", (err, weps) => {
                                if (err) {
                                    console.log(err);
                                } else {
                                    let wepCeiling = weps.length;
                                    let wepCounter = 0;
                                    weps.forEach(weapon => {
                                        let wep = weapon.replace(/\d*?\.\s/, "").split(" ");
                                        wep = wep[0].toString();
                                        wepCounter++;
                                        if (weapon.includes("png") || weapon.includes("gif") || weapon.includes("txt")) {
                                            console.log("not a wep");
                                        } else {
                                            anim.weapons.push(
                                                {
                                                    type: wep,
                                                    fullName: weapon,
                                                    still: 'img/' + category + "/" + unit + "/" + weapon + "/" + wep + "_000.png",
                                                    gif: 'img/' + category + "/" + unit + "/" + weapon + "/" + wep + ".gif"
                                                });
                                            console.log(wepCounter + "/" + weps.length + " " + anim.name);
                                            // Increments the unit count for the category when all weapon pushes have been incremented through

                                        }
                                        if (wepCounter === wepCeiling) {
                                            tempArray.push(anim);
                                            unitCounter++;
                                            // console.log(unitCounter, units.length);
                                            if (unitCounter === units.length) {
                                                catCounter++;
                                                console.log("unitCount = " + unitCounter + "/" + units.length + ". Categories = " + catCounter + "/" + catCeiling);
                                                if (catCounter === catCeiling) {
                                                    completeArray();
                                                    return;
                                                };
                                            };
                                        };
                                    });
                                };
                            });
                        });
                    });
                };
            });
        };
    });
};

/// END FUNCTIONS ///

/// LIVE EXECUTION ///

findAnims();

/// END ///