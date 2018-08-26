/// VARIABLES ///

var navItem = [];

/// END VARIABLES ///

/// FUNCTIONS ///

function navMaker(title, dispTitle, short, disp, fill) {
    navItem.push({
        title: title,
        dispTitle: dispTitle,
        short: short,
        disp: disp,
        fill: fill
    });
};

/// END FUNCTIONS ///

/// ACTIVE ///

// Build the navItem array with relevant menu options
navMaker("about", "About", "img/global/scroll.gif", "false", "aboutFill");
navMaker("sword", "Swords", "img/global/myrm.gif", "false", "swordFill");
navMaker("lance", "Lances", "img/global/soldier.gif", "false", "lanceFill");
navMaker("axe", "Axes", "img/global/fighter.gif", "false", "axeFill");
navMaker("knight", "Armor", "img/global/knight.gif", "false", "knightFill");
navMaker("cavalry", "Cavalry", "img/global/cav.gif", "false", "cavFill");
navMaker("flier", "Fliers", "img/global/peg.gif", "false", "flierFill");
navMaker("lord", "Lords", "img/global/lord.gif", "false", "lordFill");
navMaker("mage", "Mages", "img/global/mage.gif", "false", "magicFill");
navMaker("creature", "Creatures", "img/global/rev.gif", "false", "monsterFill");
navMaker("dancer", "Bards/Other", "img/global/bard.gif", "false", "dancerFill");
navMaker("spell", "Spells", "img/global/tome.gif", "false", "spellFill");

module.exports = navItem;

/// END ///