/// VARIABLES ///

var navItem = [];

/// END VARIABLES ///

/// FUNCTIONS ///

function navMaker(title, dispTitle, disp, fill) {
    navItem.push({
        title: title,
        dispTitle: dispTitle,
        disp: disp,
        fill: fill
    });
};

/// END FUNCTIONS ///

/// ACTIVE ///

// Build the navItem array with relevant menu options
navMaker("about", "About", "false", "aboutFill");
navMaker("sword", "Swords", "false", "swordFill");
navMaker("lance", "Lances", "false", "lanceFill");
navMaker("axe", "Axes", "false", "axeFill");
navMaker("knight", "Armor", "false", "knightFill");
navMaker("cavalry", "Cavalry", "false", "cavFill");
navMaker("flier", "Fliers", "false", "flierFill");
navMaker("lord", "Lords", "false", "lordFill");
navMaker("mage", "Mages", "false", "magicFill");
navMaker("creature", "Creatures", "false", "monsterFill");
navMaker("dancer", "Bards/Other", "false", "dancerFill");
navMaker("spell", "Spells", "false", "spellFill");

console.log(navItem);

module.exports = navItem;

/// END ///