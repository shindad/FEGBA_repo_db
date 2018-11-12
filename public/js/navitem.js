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
navMaker("sword", "Swords", "img/global/myrm.gif", "false", "SWDFill");
navMaker("lance", "Lances", "img/global/soldier.gif", "false", "LNCFill");
navMaker("axe", "Axes", "img/global/fighter.gif", "false", "AXEFill");
navMaker("bow", "Bows", "img/global/archer.gif", "false", "BOWFill");
navMaker("knight", "Armor", "img/global/knight.gif", "false", "ARMFill");
navMaker("cavalry", "Cavalry", "img/global/cav.gif", "false", "CAVFill");
navMaker("flier", "Fliers", "img/global/peg.gif", "false", "FLYFill");
navMaker("lord", "Lords", "img/global/lord.gif", "false", "LRDFill");
navMaker("mage", "Mages", "img/global/mage.gif", "false", "MAGFill");
navMaker("creature", "Creatures", "img/global/rev.gif", "false", "MONFill");
navMaker("dancer", "Bards/Other", "img/global/bard.gif", "false", "MISCFill");
navMaker("spell", "Spells", "img/global/tome.gif", "false", "SPLFill");

module.exports = navItem;

/// END ///