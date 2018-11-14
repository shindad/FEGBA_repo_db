/// VARIABLES ///

var navItem = [];

/// END VARIABLES ///

/// FUNCTIONS ///

function navMaker(title, dispTitle, short, disp, fill, classes) {
    navItem.push({
        title: title,
        dispTitle: dispTitle,
        short: short,
        disp: disp,
        fill: fill,
        classes: classes
    });
};

/// END FUNCTIONS ///

/// ACTIVE ///

// Build the navItem array with relevant menu options
navMaker("about", "About", "img/global/scroll.gif", "false", "aboutFill", []);
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
]);
navMaker("mage", "Mages", "img/global/mage.gif", "false", "MAGFill", [
    "Pupil", "Mage", "Sage", "Archsage",
    "Priest", "Cleric", "Monk", "Bishop", "Saint",
    "Shaman", "Druid", "Dark Knight", "Summoner", "Dark Druid", "Necromancer",
    "Troubadour", "Mage Knight", "Valkyrie"
]);
navMaker("creature", "Creatures", "img/global/rev.gif", "false", "MONFill", [
    "Phantom", "Bonewalker", "Revenant", "Bael", "Mauthe Doog", "Mogall", "Ghost", "Gargoyle", "Tarvos",
    "Gorgon", "Cyclops", "Manakete", "Dragon", "Demon King"
]);
// navMaker("dancer", "Bards/Other", "img/global/bard.gif", "false", "MISCFill", [
//     "Bard", "Dancer", "Magic Seal", "Merlinus"
// ]);
navMaker("spell", "Spells", "img/global/tome.gif", "false", "SPLFill", [
    "Aircalibur", "Aqua", "Aqua Edge", "Arcthunder", "Artemis", "Aura", "Crimson Eye", "Donbettyr", "Bolganone"
]);

module.exports = navItem;

/// END ///