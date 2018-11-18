/// VARIABLES ///

var navItem = [];

/// END VARIABLES ///

/// FUNCTIONS ///

//constructor-like function to push data to the navitem array
function navMaker(title, dispTitle, short, disp, fill, classes, dropdown) {
    navItem.push({
        title: title,
        dispTitle: dispTitle,
        short: short,
        disp: disp,
        fill: fill,
        classes: classes,
        dropdown: dropdown
    });
};

/// END FUNCTIONS ///

/// ACTIVE ///

// Build the navItem array with relevant menu options
navMaker("sword", "Swords", "img/global/myrm.gif", "false", "SWDFill", [
    "Squire", "Mercenary", "Hero", "Myrmidon", "Swordmaster", "Thief", "Assassin", "Rogue"
]);
navMaker("lance", "Lances", "img/global/soldier.gif", "false", "LNCFill", [
    "Recruit", "Soldier", "Halberdier"
]);
navMaker("axe", "Axes", "img/global/fighter.gif", "false", "AXEFill", [
    "Journeyman", "Brigand", "Pirate", "Berserker", "Fighter", "Warrior"
]);
navMaker("bow", "Bows", "img/global/archer.gif", "false", "BOWFill", [
    "Archer", "Ballista", "Nomad", "Nomad Trooper", "Ranger", "Sniper"
]);
navMaker("knight", "Armor", "img/global/knight.gif", "false", "ARMFill", [
    "Knight", "General", "Marshall"
]);
navMaker("cavalry", "Cavalry", "img/global/cav.gif", "false", "CAVFill", [
    "Cavalier", "Paladin", "Great Knight", "Master Knight"
]);
navMaker("flier", "Fliers", "img/global/peg.gif", "false", "FLYFill", [
    "Pegasus Knight", "Falcoknight", "Griffon Knight", "Wyvern Rider", "Wyvern Lord", "Wyvern Knight"
]);
navMaker("lord", "Unique", "img/global/lord.gif", "false", "LRDFill", [
    "Eirika Lord", "Eirika Great Lord", "Ephraim Lord", "Ephraim Great Lord",
    "Eliwood Lord", "Eliwood Knight Lord", "Hector Lord", "Hector Great Lord",
    "Lyn Lord", "Lyn Blade Lord", "Roy", "Bard", "Dancer", "Magic Seal", "Merlinus", "Custom"
], "right");
navMaker("mage", "Magi", "img/global/mage.gif", "false", "MAGFill", [
    "Pupil", "Mage", "Sage", "Archsage",
    "Priest", "Cleric", "Monk", "Bishop", "Saint",
    "Shaman", "Druid", "Summoner", "Dark Knight", "Necromancer",
    "Troubadour", "Mage Knight", "Valkyrie"
], "right");
navMaker("creature", "Creatures", "img/global/rev.gif", "false", "MONFill", [
    "Phantom", "Bonewalker", "Revenant", "Bael", "Mauthe Doog", "Mogall", "Ghost", "Gargoyle", "Tarvos",
    "Gorgon", "Cyclops", "Manakete", "Dragon", "Demon King"
], "right");
// Commented section out to clean up webpage navigation. Classes have been added to lord.
// navMaker("dancer", "Bards/Other", "img/global/bard.gif", "false", "MISCFill", [
//     "Bard", "Dancer", "Magic Seal", "Merlinus"
// ]);
navMaker("spell", "Spells", "img/global/tome.gif", "false", "SPLFill", [
    "Aircalibur", "Aqua", "Aqua Edge", "Arcthunder", "Artemis", "Aura", "Crimson Eye", "Donbettyr", "Bolganone"
], "right");

module.exports = navItem;

/// END ///