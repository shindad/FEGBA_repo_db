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
    "Squire", "Mercenary", "Hero", "Myrmidon", "Swordmaster", "Thief", "Assassin", "Rogue", "Custom Sword"
]);
navMaker("lance", "Lances", "img/global/soldier.gif", "false", "LNCFill", [
    "Recruit", "Soldier", "Halberdier"
]);
navMaker("axe", "Axes", "img/global/fighter.gif", "false", "AXEFill", [
    "Journeyman", "Brigand", "Pirate", "Berserker", "Fighter", "Warrior", "Custom Axe"
]);
navMaker("bow", "Bows", "img/global/archer.gif", "false", "BOWFill", [
    "Archer", "Sniper", "Ballista", "Nomad", "Ranger"
]);
navMaker("knight", "Armor", "img/global/knight.gif", "false", "ARMFill", [
    "Knight", "General", "Marshall"
]);
navMaker("cavalry", "Cavalry", "img/global/cav.gif", "false", "CAVFill", [
    "Cavalier", "Paladin", "Great Knight", "Master Knight", "Custom Cavalry"
]);
navMaker("flier", "Fliers", "img/global/peg.gif", "false", "FLYFill", [
    "Pegasus Knight", "Falcoknight", "Griffon Knight", "Wyvern Rider", "Wyvern Lord", "Wyvern Knight"
]);
navMaker("lord", "Unique", "img/global/lord.gif", "false", "LRDFill", [
    "Lord", "Great Lord", "Refresh", "Miscellaneous", "Crossover"
], "right");
navMaker("mage", "Magi", "img/global/mage.gif", "false", "MAGFill", [
    "Pupil", "Mage", "Sage", "Archsage",
    "Clergy", "Monk", "Bishop", "Saint",
    "Shaman", "Druid", "Summoner", "Necromancer",
    "Troubadour", "Mage Knight", "Valkyrie", "Dark Knight", "Custom Magi"
], "right");
navMaker("creature", "Creatures", "img/global/rev.gif", "false", "MONFill", [
    "Undead", "Demon", "Mauthe Doog", "Manakete", "Dragon", "Shapeshifter", "Custom Monster"
], "right");
navMaker("spell", "Spells", "img/global/tome.gif", "false", "SPLFill", [
    "Anima", "Dark", "Light", "Skill", "Other"
], "right");

module.exports = navItem;

/// END ///